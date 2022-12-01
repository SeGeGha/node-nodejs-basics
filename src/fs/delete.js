import { rm } from 'fs/promises';
import { existsSync } from 'fs';

const remove = async () => {
    const path = new URL('files/fileToRemove.txt', import.meta.url);

    try {
        if (!existsSync(path)) {
            throw Error('FS operation failed');
        }

        await rm(path);
    } catch (error) {
        console.error(error);
    }
};

await remove();