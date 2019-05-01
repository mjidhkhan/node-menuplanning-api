import http from 'http';
import app from './app';

//var debug = require('debug')('http');




// system configuration for port or defsault 6001
const port = process.env.port || 6001;

// create server with export app

const server = http.createServer(app);
server.listen(port, () => {
    if (process.pid) {
        console.log(`[ Listenning: localhost:${port} && PID : ${ process.pid}]\n[ Use taskkill /F /PID ${process.pid} from comand prompt in Windows to kill process]`);
    }
});