# Towards an Approach for using LLMs for Content Analysis

This repository contains the necessary documentation for conducting the analysis explained in the paper of the same name.

The goal of this example, is to apply **L**LM **A**ssisted **C**ontent **A**nalysis (LACA) with the goal of extending the work by Simon & Sheard [1], building on the work by Simon [2]. In particular, they categorised computing education research papers to provide valuable insights for potential authors, attendees, chairs, and the whole computing education community. Our goal here is not to complete the entire analysis, but rather focus on illustrating the usefulness of LACA, by focusing on identifying the themes (part of Simon's system) in a much wider data set of computing education research papers. We refer to the paper for the specifics of the example and use the repository as a resource to share the specifics mentioned in the actual paper.

## Table of contents
- [Complete dataset](#complete-dataset)
    - [Sample data](#sample-data)
- [Codebook](#codebook)
- [LLM workflow](#llm-workflow)
    - [Prompt](#prompt)
- [reference](#references)


## Complete dataset

> [📊 Complete data set](/data/complete.json)

We provide the complete data set utilised in the example of the paper. Note this is aggregated using semantic scholar, but, required changes due to registration mistakes (e.g., Koli Calling was wrongfully categorised under a different conference). An overview of the publications is shown here:

![Overview of complete dataset](/images/complete.png)

### Sample data

> [📊 Subset of data set](/data/subset.json)

We also provide the random subset of 10% of the data. An overview of the subset is shown here:

![Overview of subset of dataset](/images/subset.png)

## Codebook

> [📚 Codebook](/codebook.md)

The codebook used for the human-human comparison can also be found here. As stated before, it builds on the work of Simon & Sheard [1].

## LLM workflow

> [🤖 LLM workflow](/llm-workflow/README.md)

While we cannot explain many details about the actual library due to the review process, we do provide more information, anonymised code/visual project, and prompt [here](/llm-workflow/README.md).


## references

[1] Simon, and Judy Sheard. "Twenty-four years of ITiCSE papers." Proceedings of the 2020 ACM Conference on Innovation and Technology in Computer Science Education. 2020.

[2] Simon. "A classification of recent australasian computing education publications." Computer Science Education 17.3 (2007): 155-169.