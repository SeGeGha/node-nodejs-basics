import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { exists } from "../utils/exists.js";

const runWorker = (path, workerData) => new Promise((resolve, reject) => {
    const worker = new Worker(path, { workerData });

    worker.on('message', data => resolve({ ...data, status: 'resolved' }));
    worker.on('error', () => resolve({ data: null, status: 'error'}));
    worker.on('exit', (exitCode) => {
        if (exitCode !== 0) console.warn(`Worker has stopped with code ${exitCode}`);
    });
})

const performCalculations = async () => {
    const path = new URL('./worker.js', import.meta.url);

    if (await exists(path)) {
        const result = await Promise.allSettled(cpus().map((_, id) => runWorker(path, 10 + id)));

        console.log(result.map(({ value }) => value));
    } else {
        console.error('Check worker file');
    }
};

await performCalculations();