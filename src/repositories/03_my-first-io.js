const fs = require('fs');

const countLines = () => {
  const buf = fs.readFileSync(process.argv[2]);
  const str = buf.toString();
  const strArray = str.split('\n');
  console.log(strArray.length - 1);
};

countLines();

// If you're looking for an easy way to count the number of newlines in a
//   string, recall that a JavaScript String can be .split() into an array of
//   substrings and that '\n' can be used as a delimiter. Note that the test
//   file does not have a newline character ('\n') at the end of the last line,
//   so using this method you'll end up with an array that has one more element
//   than the number of newlines.
