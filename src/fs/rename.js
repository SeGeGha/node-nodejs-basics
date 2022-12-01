import { rename as fsRename } from 'fs/promises';
import { existsSync } from 'fs';

const rename = async () => {
    const originalPath = new URL('files/wrongFilename.txt', import.meta.url);
    const targetPath = new URL('files/properFilename.md', import.meta.url);

    try {
        if (existsSync(targetPath) || !existsSync(originalPath)) {
            throw Error('FS operation failed');
        }
        
        await fsRename(originalPath, targetPath);
    } catch(error) {
        console.error(error);
    }
};

await rename();