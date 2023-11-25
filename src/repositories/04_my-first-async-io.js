const fs = require('fs');

function readFilePrintNumberNewlines() {
  fs.readFile(process.argv[2], 'utf-8', (err, buf) => {
    if (err) {
      return console.log(err);
    } else {
      const arrayStr = buf.split('\n');
      console.log(arrayStr.length - 1);
      return;
    }
  });
}

readFilePrintNumberNewlines();
/*
toString() no hace falta, porque ya utilizamos UTF-8
*/
