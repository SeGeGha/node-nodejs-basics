import * as crypto from 'crypto';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

const calculateHash = async () => {
    const path = new URL('files/fileToCalculateHashFor.txt', import.meta.url);

    try {
        if (!existsSync(path)) {
            throw Error('FS operation failed');
        }

        const content = await readFile(path, { encoding: 'utf8' });
        const hash = crypto.createHash('sha256').update(content).digest('hex')
        
        console.log('hash: ', hash);
    } catch (error) {
        console.error(error);
    }
};

await calculateHash();