const commonData = {
	indentation: '\n',
	separator: ' ',
};

const httpMethodColors = {
	POST: 'POST-yellow',
	GET: 'GET-green',
	PUT: 'PUT-blue',
	DELETE: 'DELETE-red',
};

export function generateMarkdownTree(data, depth = 0) {
	const { indentation, separator } = commonData;
	const folderMark = '>'.repeat(depth);
	const isFirstLevel = depth === 1;
	const isSecondLevel = depth === 0;

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
			? `${methodColorBadge} ${isSecondLevel ? '###' : ''}${name} \`${
					request.url?.raw
			  }\`\n`
			: `${isFirstLevel ? '### ' : ''}${name}\n`;
		let markdown = `${indentation}${folderMark}${itemName}${folderMark}\n`;

		if (request && request.body) {
			if (
				request.body.mode === 'urlencoded' ||
				request.body.mode === 'formdata'
			) {
				const bodyMode = request.body.mode;
				const bodyData = request.body[bodyMode];
				markdown += `\n${indentation} *Body*:\n \`\`\`\n`;
				bodyData.forEach((item) => {
					const { key, value, type } = item;
					markdown += `${indentation}${key}: ${value}\n`;
				});
				markdown += `${indentation} \`\`\`\n`;
			} else if (request.body.mode === 'raw' && request.body.raw) {
				const xmlString = 'xmlns';
				if (request.body.raw.includes(xmlString)) {
					markdown += `${indentation}\n  *Body*:\n  \`\`\`xml\n${request.body.raw}\n  \`\`\`\n`;
				} else {
					markdown += `${indentation}\n  *Body*:\n  \`\`\`json\n${request.body.raw}\n  \`\`\`\n`;
				}
			} else {
				markdown += `${indentation}\n  *Body*:\n  \`\`\`${request.body.mode}${request.body.raw}  \`\`\`\n`;
			}
		}

		if (request && request.description) {
			const description = request.description
				.split('\n')
				.map((line) => `${folderMark}${line}`)
				.join('\n');
			markdown += `${folderMark}<details>\n${description}\n${folderMark}</details>\n${folderMark}\n${folderMark} ---`;
		}

		if (item && item.length >= 0) {
			markdown += `${indentation}${generateMarkdownTree(
				item,
				depth + 1,
			)}${separator}`;
		}

		return `${indentation}${markdown}${indentation}`;
	}
	return '';
}
