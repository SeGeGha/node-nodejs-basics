import { Transform, pipeline } from 'stream';

const transform = async () => {
    const { stdin: readable, stdout: writable } = process;
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkString = chunk.toString().trim();
            const reversedChunk = chunkString.split('').reverse().join('');

            this.push(reversedChunk + '\n');

            callback();
        }
    })

    pipeline(
        readable,
        transform,
        writable,
        error => {
            console.log(`Error: ${error}`);
        }
    )
};

await transform();
