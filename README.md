# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
One possible issue would be perhaps in the case where each field in the CSV could take up more than one line, which is a issue since the parser currently reads line by line. Additionally since it splits on every comma, it might cause a issue if one of the fields has a comma that we do not want to split on. Another issue could be that despite the default delimiter is a comma, sometimes although rarely they will use a different delimiter which this parser currently cannot handle. One last issue could also be that we never validate the number of fields each row should have, which means we would create malformed data if say one row has 4 fields while another has 2 fields.
- #### Step 2: Use an LLM to help expand your perspective.
The initial prompt brought up similar concerns including having a comma inside of a field and the possibility of different delimiters. It also brought up schema validation which I believe is in line with my malformed data concern. It did also bring up possible concerns with encoding issues (i.e. UTF-8) and possibly having more visuals/efficient approach if the csv file is huge to make sure it's correctly processed and the user knows it's still processing.
1) I tested out two different prompts, one with a more direct help me implement this parser with the user in mind and another with no additional prompting for considering the user. Prompt 1: Help me create CSV parser in TypeScript that currently accepts a filename as input and converts rows into strings or objects. What are important features or edge cases that I should consider? What improvements would make it easier for other developers to use in different kinds of apps? Prompt 2: Help me create CSV parser in TypeScript that currently accepts a filename as input and converts rows into strings or objects. What are important features or edge cases that I should consider?
2) The one with a more direct ask for implemenation considered more of the technical features that could be helpful which included performance and usability including web worker support and memory optimizations. The other prompt with no additional prompting for the user provided the same support as my initial prompt but had no care for adding visuals for users to know the progress of parsing the csv.
- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 
1) 1: Functionality: As a user, I can parse CSV fields that contain commas enclosed in quotes, so I can safely parse data with embedded commas without having a malformed structure of my rows. (Both mine and LLMs)
2: Functionality: As a developer, I can receive a warning/error when a row has a different number of columns than the header, so I can catch malformed csv lines ahead of time. (Mine)
3: Extensibility: As a developer, I can specify a custom or multiple delimiters when parsing a file, so I can handle csvs that are exported from different systems.(Mine)
4: Functionality: As a developer, I can correctly parse fields that may take multiple lines, so that line breaks inside fields don’t incorrectly split my rows. (Mine)
2) Initially, I found issues such as improper comma splitting inside quoted fields, inconsistent row lengths/schema, and a lack of support for different delimiters. The LLM found similar issues but also other edge cases that I didn't have off the top of my head. This included multiline fields, handling different kinds of incoding, and possible user facing features that could make the parser better. Across different prompts, I noticed the LLM found pretty consistent edge cases with what I found with some additional edge cases. What was really interesting was that depending on how I would modified the prompt, the LLM would often follow my directions pretty strongly with possibly overengineering what I asked them to consider. What resonated most with me was that it often had the considerations I had, but with more detail and more specifics in how to implement them.

### Design Choices

### 1340 Supplement
I'm not actually in 1340, I didn't realize it wasn't for 320 but I did it already so I will include it.
- #### 1. Correctness
1) A CSV parser is in my belief correct, if it correctly preserves the initial structure and meaning of the csv it is processing as well as fits the expectations(schema) of the caller/user. General properties it should have: it should be able to read every row in order, split fields properly with the correct delimiter, and handle edge cases such as multiline rows or different encodings. With a provided schema, it should do it's best to create the expected objects in the format provided or clearly throw a validation error.
- #### 2. Random, On-Demand Generation
2) Randomly produced csvs would allow us test our parser with a much wider variety of inputs than that we could write by hand. By creating and giving the parser random rows of different lengths/contents/formats, we can find possible edge cases that we might have missed before. It makes sure our parser is robust under many different situations as well as saving a lot of time having to manually create test csvs.
- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…
3) This assignment was a bit different from other assignments as it felt a little less structured with the assignment steps. There was not much that was surprising other than having to pick up more typescript syntax which is very explicit compared to the majority of the code I write which is in python. I did get slightly stuck on some parts where I wasn't sure why I was getting a typescript error such as when I wasn't properly declaring T as a generic or didn't fix my return statement, as well as making sure I using zod correctly to implement taking in a schema. I got through these bugs quickly with both documentation provided in the google doc and reading up on stackoverflow.
#### Team members and contributions (include cs logins):
N/A
#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
N/A, generative AI only when specifically asked to use.
#### Total estimated time it took to complete project:
2 hours
#### Link to GitHub Repo:  
https://github.com/cs0320-f25/typescript-csv-DarrenWang12#