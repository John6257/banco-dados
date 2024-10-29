
// importa o modulo
// const http = require('http');

// import { log } from 'console';
import http from 'http';

const hostname = '127.0.0.1';
const porta = '3000';

const server = http.createServer((request, response) => {
response.statusCode = 200;
response.setHeader('Content-Type', 'text/html');
response.end('\nhello word, node.js \n');
});

server.listen(porta,hostname, () => {
    console.log(`servidopr rodando em http://${hostname}:${porta}`);
    
});



