import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import ('./files/c.js');

const random = Math.random();
const unknownObject = JSON.parse(
    await readFile(new URL(`files/${random > 0.5 ? 'a.json' : 'b.json'}`, import.meta.url))
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
}
