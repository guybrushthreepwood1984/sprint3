const workWithData = require('./06_2_mymodule');

const callback = (err, data) => {
  if (err) {
    return new Error(err);
  } else {
    return data;
  }
};

workWithData.readListPrintFilteredFiles(
  process.argv[2],
  process.argv[3],
  callback
);
