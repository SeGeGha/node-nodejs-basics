import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

const path = new URL('files/fileToRead.txt', import.meta.url);

const read = async () => {
    if (!existsSync(path)) {
        throw Error('FS operation failed');
    }

    try {
        const file = await readFile(path, { encoding: 'utf8' });
        
        console.log(file);
    } catch (error) {
        console.error(error);
    }
};

await read();