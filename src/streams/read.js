import { createReadStream } from 'fs';
import { exists } from "../utils/exists.js";

const read = async () => {
    const path = new URL('./files/fileToRead.txt', import.meta.url);

    if (!await exists(path)) {
        throw Error(`No file: ${path}`);
    }

    const readable = createReadStream(new URL(path));
    const writable = process.stdout;

    readable.on('data', data => {
        writable.write(data.toString());
    });
};

await read();