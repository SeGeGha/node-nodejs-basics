import { readFile } from 'fs/promises';

const read = async () => {
    const path = new URL('files/fileToRead.txt', import.meta.url);

    try {
        const content = await readFile(path, { encoding: 'utf8' });
        
        console.log(content);
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await read();