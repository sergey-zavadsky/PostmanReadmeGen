import { writeFileSync } from 'fs';
import { promises as fsPromises } from 'fs';
import { dirname } from 'path';

async function main() {
	try {
		const args = process.argv.slice(2);
		const dir = args[0];

		const jsonData = await readJsonData(dir);
		if (jsonData) {
			generateMarkdown(jsonData, dir);
		} else {
			console.error('Error: JSON data is missing or invalid.');
		}
	} catch (error) {
		console.error(error);
	}
}

async function readJsonData(pathToJson) {
	try {
		const data = await fsPromises.readFile(pathToJson, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.error(error);
		return null;
	}
}

function generateMarkdown(data, dir) {
	const commonData = {
		indentation: '  ',
		separator: ' \n ---',
	};

	function generateMarkdownTree(data, depth = 0) {
		const { indentation, separator } = commonData;

		if (Array.isArray(data)) {
			return data
				.map((item) => generateMarkdownTree(item, depth + 1))
				.join('\n');
		} else if (typeof data === 'object') {
			const { name, item, request } = data;
			const itemName = request
				? `${request.method} ${name} \`${request.url.raw}\`\n`
				: name;
			let markdown = `${indentation}- ${itemName}\n`;

			if (request && request.body) {
				if (
					request.body.mode === 'urlencoded' ||
					request.body.mode === 'formdata'
				) {
					const bodyMode = request.body.mode;
					const bodyData = request.body[bodyMode];
					markdown += `${indentation}\n  *Body*:\n`;
					bodyData.forEach((item) => {
						const { key, value, type } = item;
						markdown += `${indentation}\n    - ${key}: ${value} (${type})\n`;
					});
				} else if (request.body.mode === 'raw' && request.body.raw) {
					const xmlString = 'xmlns';
					if (request.body.raw.includes(xmlString)) {
						markdown += `${indentation}\n  *Body*:\n  \`\`\`xml\n${request.body.raw}\n  \`\`\`\n`;
					} else {
						markdown += `${indentation}\n  *Body*:\n  \`\`\`json\n${request.body.raw}\n  \`\`\`\n`;
					}
				} else {
					markdown += `${indentation}\n  *Body*:\n  \`\`\`${request.body.mode}\n${request.body.raw}\n  \`\`\`\n`;
				}
			}

			if (request && request.description) {
				markdown += `${indentation}\n<details>\n<summary>Description</summary>\n\n${request.description}\n\n</details>\n${separator}`;
			}

			if (item && item.length > 0) {
				markdown += generateMarkdownTree(item, depth + 1);
			}

			return markdown;
		}
		return '';
	}

	const markdownTree = `### ${data?.info?.name}\n ${generateMarkdownTree(
		data.item,
	)}`;

	if (data?.info && data?.info?.name) {
		const directory = dirname(dir);
		const fileName = `${directory}/${data?.info?.name.replace(
			/[-\/\\:*?"<>|]/g,
			'_',
		)}.README.md`;

		try {
			writeFileSync(fileName, markdownTree);
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

main();
