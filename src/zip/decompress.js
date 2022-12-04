import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { exists } from "../utils/exists.js";

const decompress = async () => {
    const path = new URL('./files/archive.gz', import.meta.url);

    if (!await exists(path)) {
        throw Error(`No file: ${path}`);
    }

    const readable = createReadStream(new URL(path));
    const writable = createWriteStream(new URL('./files/fileToCompress.txt', import.meta.url));
    const unzip = createGunzip();

    try {
        await pipeline(readable, unzip, writable);

        console.log('Successfully decompressed the file');
    } catch (error) {
        console.error(error.message);
    }
};

await decompress();