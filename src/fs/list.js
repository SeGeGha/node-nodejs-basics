import { readdir } from 'fs/promises';
import { exists } from '../utils/exists.js';

const list = async () => {
    const path = new URL('files', import.meta.url);
    
    try {
        if (!await exists(path)) {
            throw Error('FS operation failed');
        }

        const files = await readdir(path);
        
        console.log('files: ', files.join(', '));
    } catch (error) {
        console.error(error.message);
    }
};

await list();