'use strict';

const reverseString = require('./reverse-string');
const fileReader = require('./src/file-reader');

const fileUrl = './reverse-string.js';


fileReader.read(fileUrl, (fileString) => {
  console.log('fileString: ', fileString);
});