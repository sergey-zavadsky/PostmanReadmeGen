import { writeFileSync } from 'fs';
import { generateMarkdownTree } from './treeStructure.js';
import { dirname } from 'path';

export function generateSummaryTree(data, dir) {
	const directory = dirname(dir);
	const fileName = `${directory}/README.md`;
	const markdownTree = `\n## ${data?.info?.name}\n ${generateMarkdownTree(
		data.item,
	)}`;

	const summaryRegex = /<summary>[\s\S]*?<\/summary>/g;
	const detailsRegex = /<details>[\s\S]*?<\/details>/g;
	const bodyContentRegex = /\*Body\*:\s*```[\s\S]*?```/g;
	const body = /(\*Body\*:\s*)[\s\S]*/g;

	const summaryMarkdown = markdownTree
		.replace(summaryRegex, '')
		.replace(detailsRegex, '')
		.replace(bodyContentRegex, '')
		.replace(body, '');

	try {
		writeFileSync(fileName, summaryMarkdown, { flag: 'a' });
		console.log(`Summary Markdown file created: ${fileName}`);
	} catch (error) {
		console.error(`Error writing file: ${error}`);
	}
}
