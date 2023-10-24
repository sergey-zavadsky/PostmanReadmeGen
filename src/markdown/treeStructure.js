const commonData = {
	indentation: '  ',
	separator: ' \n ---',
};

const httpMethodColors = {
	POST: 'POST-yellow',
	GET: 'GET-green',
	PUT: 'PUT-blue',
	DELETE: 'DELETE-red',
	// Add more HTTP methods and colors as needed
};

export function generateMarkdownTree(data, depth = 0) {
	const { indentation, separator } = commonData;

	if (Array.isArray(data)) {
		return data.map((item) => generateMarkdownTree(item, depth + 1)).join('\n');
	} else if (typeof data === 'object') {
		const { name, item, request } = data;
		const methodColorBadge = httpMethodColors[request?.method]
			? `![${request?.method}](https://img.shields.io/badge/${
					httpMethodColors[request?.method]
			  })`
			: '';
		const itemName = request
			? `${methodColorBadge} ${name} \`${request.url.raw}\`\n`
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
			markdown += `${indentation}\n<details>\n<summary>Description</summary>\n\n${request.description}\n\n</details>\n`;
		}

		if (item && item.length > 0) {
			markdown += `${generateMarkdownTree(item, depth + 1)}${separator}`;
		}

		return markdown;
	}
	return '';
}
