import httpServer from './server.js';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers'
import mongoose from "mongoose";
import config from '../src/config.js';

console.log('argumentos process.argv')
console.log(process.argv)
const yargsPort = yargs(hideBin(process.argv)).argv.port
console.log(`yargs port es ${yargsPort}`)
const PORT = yargsPort || 8080

const server = httpServer.listen(PORT, async () => {
    await mongoose.connect(config.mongodb.connectionString, config.mongodb.options)
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on('error', error => console.log(`Error en servidor ${error}`));