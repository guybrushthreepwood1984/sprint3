const net = require('net');

const port = Number(process.argv[2]);

function createCustomDate() {
  const myDate = new Date();
  let myYear = myDate.getFullYear();
  let myMonth = myDate.getMonth() + 1;
  if (myMonth < 10) {
    myMonth = '0' + myMonth;
  }
  let myDayOfMonth = myDate.getDate();
  if (myDayOfMonth < 10) {
    myDayOfMonth = '0' + myDayOfMonth;
  }
  let myHour = myDate.getHours();
  if (myHour < 10) {
    myHour = '0' + myHour;
  }
  let myMinutes = myDate.getMinutes();
  if (myMinutes < 10) {
    myMinutes = '0' + myMinutes;
  }

  let myCustomDateAndTime = `${myYear}-${myMonth}-${myDayOfMonth} ${myHour}:${myMinutes}\n`;
  return myCustomDateAndTime;
}

const server = net.createServer((socket) => {
  socket.end(createCustomDate());
});

server.listen(port);

///////////////////official solution///////////////////////////
/*
'use strict'
    const net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
    */

/////////////To see data, we could use/////////////////////////
// socket.on('data', function (data) {
//     console.log(data.toString())
//   }
