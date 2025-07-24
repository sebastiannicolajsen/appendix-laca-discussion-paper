import fs from 'fs';
import { $,_, Response, setConfigFromObject, ComparisonModel, KrippendorffsComparisonModel } from 'anonymized';


// configure model used (having LM Studio installed )
setConfigFromObject({
    model: "gemma-3-27b-it",
    path: "http://127.0.0.1",
    port: 1234,
    endpoint: "v1/chat/completions",
    settings: {
        temperature: 0.0,
        max_tokens: -1,
        stream: false
    }
})

// load the subset of data used for comparison
const publications = JSON.parse(fs.readFileSync("data/subset.json", "utf8"));


// create prompt with appropriate themes
const themes = [
    "Teaching/learning techniques",
    "Teaching/learning tools",
    "Curriculum",
    "Ability/aptitude/understanding",
    "Assessment tools",
    "Assessment techniques",
    "Teaching/learning theories & models",
    "Recruitment, progression, pathways",
    "Online/distance delivery",
    "Educational technology",
    "Gender issues"
]

const prompt = 
`Given the course objectives, determine which of the following themes are covered by the course. 
The theme of a paper is what the paper is about, and is not to be confused with its context. 
A paper in the context of a formal methods course might be about how the course is taught, or about a tool to assist with assessment in the course, or about gender issues in the course, and so on; these would be the themes of these papers.
Some papers do not have a single clear theme: a paper might be about the introduction of a flipped classroom and its impact on female students; its theme might then be either teaching/learning techniques or gender issues
Reply with only the themes that are covered by the course, separated by underscore (_):
"${themes.join("\", \"")}"
`

// setup the llm analysis
const llm = $(prompt, "llm-analysis");

// combine title and abstract for analysis
const content = $((publication) => {
    return publication.title + "\n" + publication.abstract;
}, "select-appropriate-content")

// Compose the different steps of the analysis
const chain = _.compose(content, llm, $((r) => r.split("_"),"split-to-array"))

const results = [];

// Run for entire subset file :
for(const publication of publications){
    const input = Response.create(publication, publication, "publication")
    const result = await chain.run(input)
    results.push(result)
    console.log(result.output);
}

// load human codes data (this is only included in the sample for the first publication):
const humanMapping = {}
publications.forEach(p => humanMapping[p.abstract] = p.coded)
const readHumanCode = $((p) => humanMapping[p.abstract], "read-human-code")
const humanCodes = await publications.map(async p => await readHumanCode(p))

// setup the modified Krippendorffs model, using the themes as the categories
const model = new KrippendorffsComparisonModel(themes);
const alpha = ComparisonModel.compareMultiple(llmResponses, humanCodes, model);

// save results and alpha to file
fs.writeFileSync("data/results-subset.json", JSON.stringify(results, null, 2))
fs.writeFileSync("data/alpha.json", JSON.stringify(alpha, null, 2))