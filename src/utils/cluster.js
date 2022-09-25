import cluster from "cluster";
import http from 'http';
import os from 'os';

const cpus = os.cpus().length();

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`)

    // fork workers
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {

}