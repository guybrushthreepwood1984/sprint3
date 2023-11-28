const http = require('http');

const url = process.argv[2];

function readAndPrintData() {
  http.get(url, (response) => {
    let rawData = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      rawData += data;
    });

    response.on('end', () => {
      try {
        console.log(rawData.length);
        console.log(rawData);
      } catch (e) {
        console.error(e.message);
      }
    });
  });
}
readAndPrintData();

// https://nodejs.org/api/http.html#httpgeturl-options-callback
