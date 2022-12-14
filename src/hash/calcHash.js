import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { exists } from '../utils/exists.js';

const calculateHash = async () => {
    const path = new URL('files/fileToCalculateHashFor.txt', import.meta.url);

    try {
        if (!await exists(path)) {
            throw Error('FS operation failed');
        }

        const content = await readFile(path, { encoding: 'utf8' });
        const hash = createHash('sha256').update(content).digest('hex')
        
        console.log('hash: ', hash);
    } catch (error) {
        console.error(error.message);
    }
};

await calculateHash();