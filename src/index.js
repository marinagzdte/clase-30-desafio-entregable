import httpServer from './server.js';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers'

console.log('argumentillos')
console.log(process.argv)
const yargsPort = yargs(hideBin(process.argv)).argv.port
console.log(`yargs port es ${yargsPort}`)
const PORT = yargsPort || 8080

const server = httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en servidor ${error}`));