import { promises as fsPromises } from 'fs';

export async function readJsonData(pathToJson) {
	try {
		const data = await fsPromises.readFile(pathToJson, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.error(error);
		return null;
	}
}
