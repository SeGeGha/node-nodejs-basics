import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { exists } from "../utils/exists.js";

const compress = async () => {
    const path = new URL('./files/fileToCompress.txt', import.meta.url);

    if (!await exists(path)) {
        throw Error(`No file: ${path}`);
    }

    const readable = createReadStream(new URL(path));
    const writable = createWriteStream(new URL('./files/archive.gz', import.meta.url));
    const zip = createGzip();

    try {
        await pipeline(readable, zip, writable);

        console.log('Successfully compressed the file');
    } catch (error) {
        console.error(error.message);
    }
};

await compress();