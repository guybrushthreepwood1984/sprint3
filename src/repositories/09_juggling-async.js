const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];

let counter = 0;

const results = [];

function readAndPrintData() {
  http.get(urls[counter], (response) => {
    let rawData = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      rawData += data;
    });

    response.on('end', () => {
      results.push(rawData);
      counter++;

      if (counter === urls.length) {
        const dataAsString = results.join('\n');
        console.log(dataAsString);
      } else {
        readAndPrintData();
      }
    });
  });
}

readAndPrintData();

///////////////Official solution/////////////////////////////

// 'use strict'
//     const http = require('http')
//     const bl = require('bl')
//     const results = []
//     let count = 0

//     function printResults () {
//       for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }

//           results[index] = data.toString()
//           count++

//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }

//     for (let i = 0; i < 3; i++) {
//       httpGet(i)
//     }
