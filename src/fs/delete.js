import { rm } from 'fs/promises';
import { exists } from '../utils/exists.js';

const remove = async () => {
    const path = new URL('files/fileToRemove.txt', import.meta.url);

    try {
        if (!await exists(path)) {
            throw Error('FS operation failed');
        }

        await rm(path);
    } catch (error) {
        console.error(error.message);
    }
};

await remove();