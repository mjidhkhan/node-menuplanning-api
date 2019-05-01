import http from 'http';
import app from './app';

// system configuration for port or defsault 6001
const port = process.env.port || 6001;

// create server with export app

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`app listening at port : ${port}`);
});