import { createWriteStream } from 'fs';

const write = async () => {
    const readable = process.stdin;
    const writable = createWriteStream(new URL('files/fileToWrite.txt', import.meta.url));

    console.log('Input your data:')

    readable.on('data', data => {
        writable.write(data.toString());
    });
};

await write();