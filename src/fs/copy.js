import { readdir, mkdir, copyFile } from 'fs/promises';
import { extname } from 'path';
import { exists } from '../utils/exists.js';

const copyFilesFromDir = async (currentDirName, targetDirName) => {
    const originalPath = new URL(currentDirName, import.meta.url);
    const targetPath = new URL(targetDirName, import.meta.url);

    try {
        if (!await exists(originalPath) || await exists(targetPath)) {
            throw Error('FS operation failed');
        }

        await mkdir(targetPath);

        const content = await readdir(originalPath);

        return Promise.all(content.map(item => {
            const currentPathString = `${currentDirName}/${item}`;
            const targetPathString = `${targetDirName}/${item}`;

            return extname(item)
                ? copyFile(
                    new URL(currentPathString, import.meta.url),
                    new URL(targetPathString, import.meta.url)
                )
                : copyFilesFromDir(currentPathString, targetPathString);
        }));
    } catch (error) {
        return Promise.reject(error);
    }
}

const copy = async () => {
    try {
        await copyFilesFromDir('files', 'files_copy');

        console.log(`Copy from /files/ to /files_copy/ completed`);
    } catch (error) {
        console.error(error.message);
    }
};

copy();