import { readFile } from 'fs/promises';
import { exists } from '../utils/exists.js';

const read = async () => {
    const path = new URL('files/fileToRead.txt', import.meta.url);

    try {
        if (!await exists(path)) {
            throw Error('FS operation failed');
        }

        const content = await readFile(path, { encoding: 'utf8' });
        
        console.log(content);
    } catch (error) {
        console.error(error.message);
    }
};

await read();