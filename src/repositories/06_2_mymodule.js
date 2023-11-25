const fs = require('fs');
const path = require('path');

function readListPrintFilteredFiles(directory, filenameExt, callback) {
  directory = directory.toString();

  filenameExt = '.' + filenameExt.toString();

  fs.readdir(directory, (err, data) => {
    if (err) {
      return callback(err);
    } else {
      return data.forEach((file) => {
        if (path.extname(file) === filenameExt) {
          console.log(file);
          return callback(null, data);
        }
      });
    }
  });
}

exports.readListPrintFilteredFiles = readListPrintFilteredFiles;
