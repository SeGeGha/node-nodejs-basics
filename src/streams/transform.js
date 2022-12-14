import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const { stdin: readable, stdout: writable } = process;
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkString = chunk.toString().trim();
            const reversedChunk = chunkString.split('').reverse().join('');

            this.push(reversedChunk + '\n');

            callback();
        }
    });

    try {
        await pipeline(readable, transform, writable);
    } catch (error) {
        console.error(error.message);
    }
};

await transform();
