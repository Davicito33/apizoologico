'use strict';
const http = require('http');

const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola mundo');
});

server.listen(5000);