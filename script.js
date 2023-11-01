import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// const directory = 'collections';
export const generateTrees = (directory) => {
	let directorySummaryMarkdown = '';

	const processFilesRecursively = (dir) => {
		const readmePath = path.join(dir, 'README.md');

		try {
			if (fs.existsSync(readmePath)) {
				fs.unlinkSync(readmePath);
			}
		} catch (error) {
			console.log('README.md not found, continue');
		}

		const files = fs.readdirSync(dir);
		files.forEach((file) => {
			const filePath = path.join(dir, file);
			if (fs.statSync(filePath).isDirectory()) {
				directorySummaryMarkdown += processFilesRecursively(filePath);
			} else if (file.endsWith('.postman_collection.json')) {
				execSync(`node node_modules/postmanreadmegen/index.js "${filePath}"`, {
					stdio: 'inherit',
				});
			}
		});
	};

	processFilesRecursively(directory);
	process.exit(0);
};
