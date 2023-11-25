const fs = require('fs');

const printListFiles = (pathName, fileExtention) => {
  pathName = process.argv[2];
  fileExtention = process.argv[3].toString();

  fs.readdir(pathName, (err, listFilenames) => {
    if (err) {
      return new Error('Something went wrong on reading directory');
    } else {
      const filteredList = listFilenames.filter((file) =>
        file.includes('.' + fileExtention)
      );
      console.log(
        filteredList.reduce((list, files) => {
          return list + files + '\n';
        }, '')
      );
    }
  });
};

printListFiles();

//////////////// solution learnyounode///////////////////
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
