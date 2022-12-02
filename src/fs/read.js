import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

const read = async () => {
    const path = new URL('files/fileToRead.txt', import.meta.url);

    try {
        if (!existsSync(path)) {
            throw Error('FS operation failed');
        }

        const content = await readFile(path, { encoding: 'utf8' });
        
        console.log(content);
    } catch (error) {
        console.error(error);
    }
};

await read();