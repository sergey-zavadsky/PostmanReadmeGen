import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { generateMarkdownTree } from './treeStructure.js';

export function generateMarkdown(data, dir) {
	const markdownTree = `## ${data?.info?.name}\n ${generateMarkdownTree(
		data.item,
	)}`;

	const cleanedMarkdownTree = markdownTree
		.split('\n')
		.filter((line) => line.trim() !== '')
		.join('\n');

	if (data?.info && data?.info?.name) {
		const directory = dirname(dir);
		const fileName = `${directory}/${data?.info?.name.replace(
			/[-\/\\:*?"<>|]/g,
			'_',
		)}.README.md`;

		try {
			writeFileSync(fileName, `${cleanedMarkdownTree}\n`);
			console.log(`Markdown file created: ${fileName}`);
		} catch (error) {
			console.error(`Error writing file: ${error}`);
		}
	} else {
		console.error(
			'Error: jsonData.info.name is not defined or missing in the JSON data.',
		);
	}
}
