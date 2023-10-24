import { generateMarkdown } from './src/markdown/markdown.js';
import { generateSummaryTree } from './src/markdown/summary.js';
import { readJsonData } from './src/utils/utils.js';

async function main() {
	try {
		const args = process.argv.slice(2);
		const dir = args[0];

		const jsonData = await readJsonData(dir);
		if (jsonData) {
			generateMarkdown(jsonData, dir);
			generateSummaryTree(jsonData, dir);
		} else {
			console.error('Error: JSON data is missing or invalid.');
		}
	} catch (error) {
		console.error(error);
	}
}

main();
