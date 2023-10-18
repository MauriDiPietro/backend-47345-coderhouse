// const http = require('http');
// import fs from 'fs';
import http from 'http';
import { products } from './products.js';
import { users } from './users.js';

const server = http.createServer((req, res)=>{
    console.log(req.url);
    // res.end('Mi primer servidor')
    if(req.url === '/products'){
        res.end(JSON.stringify(products));
    }
    if(req.url === '/users'){
        res.end(JSON.stringify(users));
    }
});

server.listen(8080, ()=>console.log('Server ok en puerto 8080'))