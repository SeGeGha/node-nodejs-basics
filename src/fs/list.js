import { readdir } from 'fs/promises';
import { existsSync } from 'fs';

const path = new URL('files', import.meta.url);

const list = async () => {
    if (!existsSync(path)) {
        throw Error('FS operation failed');
    }

    try {
        const files = await readdir(path);
        
        console.log('files: ', files.join(', '));
    } catch (error) {
        console.error(error);
    }
};

await list();