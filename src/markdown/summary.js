import { writeFileSync } from 'fs';
import { generateMarkdownTree } from './treeStructure.js';
import { dirname } from 'path';

export function generateSummaryTree(data, dir) {
	const folderMark = '>';
	const directory = dirname(dir);
	const fileName = `${directory}/README.md`;
	const markdownTree = `### ${data?.info?.name}\n ${generateMarkdownTree(
		data.item,
	)}`;

	// Define regex patterns for <summary> and <details> blocks
	const summaryRegex = /<summary>[\s\S]*?<\/summary>/g;
	const detailsRegex = /<details>[\s\S]*?<\/details>/g;
	const bodyContentRegex = /\*Body\*:\n\s*```([\s\S]*?)```/g;

	// Remove content within <summary> and <details> blocks using regex
	const summaryMarkdown = markdownTree
		.replace(summaryRegex, '')
		.replace(detailsRegex, '')
		.replace(bodyContentRegex, '');

	try {
		writeFileSync(fileName, summaryMarkdown);
		console.log(`Summary Markdown file created: ${fileName}`);
	} catch (error) {
		console.error(`Error writing file: ${error}`);
	}
}
