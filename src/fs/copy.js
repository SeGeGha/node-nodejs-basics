import { readdir, mkdir, copyFile } from 'fs/promises';
import { exists } from '../utils/exists.js';

const copy = async () => {
    const originalPath = new URL('files', import.meta.url);
    const targetPath = new URL('files_copy', import.meta.url);

    try {
        if (!await exists(originalPath) || await exists(targetPath)) {
            throw Error('FS operation failed');
        }

        await mkdir(targetPath);

        const files = await readdir(originalPath);

        await Promise.all(files.map(file => {
            const originalFilePath = new URL(`files/${file}`, import.meta.url);
            const targetFilePath = new URL(`files_copy/${file}`, import.meta.url);

            return copyFile(originalFilePath, targetFilePath);
        }));
    } catch(error) {
        console.error(error.message);
    }
};

copy();