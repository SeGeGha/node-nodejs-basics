import { Worker } from 'worker_threads';
import { cpus } from 'os';

const runWorker = (path, workerData) => new Promise((resolve, reject) => {
    const worker = new Worker(path, { workerData });

    worker.on('message', data => resolve({ ...data, status: 'resolved' }));
    worker.on('error', () => reject({ data: null, status: 'error'}));
    worker.on('exit', (exitCode) => {
        if (exitCode !== 0) console.warn(`Worker has stopped with code ${exitCode}`);
    });
})

const performCalculations = async () => {
    const path = new URL('./worker.js', import.meta.url);
    const result = await Promise.all(cpus().map((_, id) => runWorker(path, 10 + id)));

    console.log(result);
};

await performCalculations();