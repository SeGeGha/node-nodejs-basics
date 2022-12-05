import { fork } from 'child_process';
import { exists } from "../utils/exists.js";

const spawnChildProcess = async (args) => {
    const path = new URL('./files/script.js', import.meta.url);

    if (await exists(path)) {
        const child = fork(path, args);

        child.on('exit', code => {
            console.log(`Child process terminated with code: ${code}`);
        });

        child.on('error', error => {
            console.log(`Error in child process: ${error}`);
        });
    } else {
        console.error('Check file path');
    }
};

spawnChildProcess([154, 'JavaScript', true, 'x4wdrt4']);