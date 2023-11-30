const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

server = http.createServer((request, response) => {
  request
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});

server.listen(port, () => console.log(`Server is listening on port ${port}`));

///////////////////////Official solution//////////////////////////////
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//  if (req.method != 'POST')
//    return res.end('send me a POST\n')

//  req.pipe(map(function (chunk) {
//    return chunk.toString().toUpperCase()
//  })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
