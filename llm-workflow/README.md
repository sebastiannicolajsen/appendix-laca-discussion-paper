
# LLM workflow
During the review phase we cannot disclose the actual name of the library used as it is tied to our names. However, we here provide the code as it would run, if the proper NPM package was to be installed or the visual tool. Currently, the library only supports Javascript while a Python port is in progress. The visual tool utilises this very same library.

![image of visual tool](https://github.com/sebastiannicolajsen/appendix-towards-an-approach-for-using-llms-for-content-analysis/blob/main/images/visual-analysis.png)

## Project file
We provide the [project file](/llm-workflow/project-file.json) for the flow shown in the paper. Importing this in the visual tool gives you access to executing the flow from there.

## Comparison
We provide the [code](/llm-workflow/comparison.js) for executing the IRR comparison between human and LLM. Note, that this would require that the subset is properly embedding all human codes. Currently, it only illustrates this for the *first* publication in the [subset of the data](/data/subset.json).

## Complete execution
We also provide the [code](/llm-workflow/complete-analysis.js) for running the analysis on the [complete data set](/data/complete.json).

## Prompt
The [prompt](/llm-workflow/prompt.md) used in the visual tool and in the code solution, is also provided here.