import { readdir } from 'fs/promises';
import { existsSync } from 'fs';

const list = async () => {
    const path = new URL('files', import.meta.url);
    
    try {
        if (!existsSync(path)) {
            throw Error('FS operation failed');
        }

        const files = await readdir(path);
        
        console.log('files: ', files.join(', '));
    } catch (error) {
        console.error(error);
    }
};

await list();