import { appendFile } from 'fs/promises';
import { exists } from '../utils/exists.js';

const create = async () => {
    const path = new URL('files/fresh.txt', import.meta.url);

    try {
        if (await exists(path)) {
            throw Error('FS operation failed');
        }

        await appendFile(path, 'I am fresh and young');
    } catch (error) {
        console.error(error.message);
    }
};

await create();