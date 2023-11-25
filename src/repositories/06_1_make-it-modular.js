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

/*
Module Contract
One important takeaway from this lesson apart from modularizing our code the node.js way, is the concept of a module contract.  In this case, our module contract is to export a single function that takes a directory, filter string, and callback as arguments.  The callback must be called once, with an error or data.  We are not modifying any global variables, and we are handling all errors by passing them to our callback to print an error message if an error occurs.

This concept is important moving forward because modules created and published to npm (node.js package manager) should behave as intended for anyone expecting that the module will produce the results of the module contract.  Building with modules is what node.js all about.

https://joecreager.com/learnyounode-lesson-6-make-it-modular/
*/
