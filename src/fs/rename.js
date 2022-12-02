import { rename as fsRename } from 'fs/promises';
import { exists } from '../utils/exists.js';

const rename = async () => {
    const originalPath = new URL('files/wrongFilename.txt', import.meta.url);
    const targetPath = new URL('files/properFilename.md', import.meta.url);

    try {
        if (await exists(targetPath) || !await exists(originalPath)) {
            throw Error('FS operation failed');
        }
        
        await fsRename(originalPath, targetPath);
    } catch(error) {
        console.error(error.message);
    }
};

await rename();