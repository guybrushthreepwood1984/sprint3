const http = require('http');

const url = process.argv[2].toString();

function readUrlprintDataEvent() {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      if (data) {
        console.log(data);
      } else return new Error('error on receiving data');
    });
  });
}

readUrlprintDataEvent();

////////////////offical solution///////////////////////////
/*    'use strict'
    const http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)*/
