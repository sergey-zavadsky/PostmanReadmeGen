import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// const directory = 'collections';
export const generateTrees = (directory) => {
	const processFilesRecursively = (dir) => {
		const files = fs.readdirSync(dir);

		files.forEach((file) => {
			const filePath = path.join(dir, file);
			if (fs.statSync(filePath).isDirectory()) {
				processFilesRecursively(filePath);
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
