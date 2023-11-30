const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const fileLocation = process.argv[3];

const server = http.createServer((request, response) => {
  fs.createReadStream(fileLocation).pipe(response);
});
server.listen(port);

//request: fetch properties (header, query-string...)
//response: send data to client, both headers and body

/////////////official solution//////////////////
// ('use strict');
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' });

//   fs.createReadStream(process.argv[3]).pipe(res);
// });

// server.listen(Number(process.argv[2]));
