import { appendFile } from 'fs/promises';
import { existsSync } from 'fs';

const create = async () => {
    const path = new URL('files/fresh.txt', import.meta.url);
    
    try {
        if (existsSync(path)) {
            throw Error('FS operation failed');
        }

        await appendFile(path, 'I am fresh and young');
    } catch (error) {
        console.error(error);
    }
};

await create();
