const commonData = {
	indentation: '  ',
	separator: ' \n ---',
};

export function generateMarkdownTree(data, depth = 0) {
	const { indentation, separator } = commonData;

	if (Array.isArray(data)) {
		return data.map((item) => generateMarkdownTree(item, depth + 1)).join('\n');
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
