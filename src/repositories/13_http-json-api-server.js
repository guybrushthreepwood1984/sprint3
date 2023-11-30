const http = require('http');
let url = require('url');

const myHourMinuteSecondObject = (isoInput) => {
  const date = new Date(isoInput);
  const dateObject = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
  return JSON.stringify(dateObject, null, 2);
};

const myUnixEpochTime = (isoInput) => {
  const date = new Date(isoInput);
  const dateObject = {
    unixtime: date.getTime()
  };
  return JSON.stringify(dateObject, null, 2);
};

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    url = url.parse(req.url, true);
    const myIsoUrl = url.query.iso;
    if (url.pathname === '/api/parsetime') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(myHourMinuteSecondObject(myIsoUrl));
      return;
    }
    if (url.pathname === '/api/unixtime') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(myUnixEpochTime(myIsoUrl));
      return;
    } else {
      res.writeHead(404);
      res.end('Something went wrong');
    }
  }
});

server.listen(port, () => console.log(`Server listening on port ${port}`));

///////////////////official solution////////////////////////////

// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
