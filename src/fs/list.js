import { readdir } from 'fs/promises';
import { extname } from 'path';
import { exists } from '../utils/exists.js';

const list = async () => {
    const path = new URL('files', import.meta.url);
    
    try {
        if (!await exists(path)) {
            throw Error('FS operation failed');
        }

        const content = await readdir(path);
        const files = content.filter(extname);

        console.log('files: ', files);
    } catch (error) {
        console.error(error.message);
    }
};

await list();