import { readdir, mkdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';

const originalPath = new URL('files', import.meta.url);
const targetPath = new URL('files_copy', import.meta.url);

const copy = async () => {
    if (!existsSync(originalPath) || existsSync(targetPath)) {
        throw Error('FS operation failed');
    }
    
    try {
        await mkdir(targetPath);

        const files = await readdir(originalPath);
    
        files.forEach(file => copyFile(new URL(`files/${file}`, import.meta.url), new URL(`files_copy/${file}`, import.meta.url)));
    } catch(error) {
        console.error(error);
    }
};

copy();