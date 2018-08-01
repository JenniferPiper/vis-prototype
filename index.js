'use strict';

const fileReader = require('./src/file-reader');
const tokenizer = require('./src/tokenizer');

const fileUrl = './reverse-string.js';

fileReader.read(fileUrl, (fileString) => {
  // console.log('fileString: ', fileString);
  const tokenizedFile = tokenizer.tokenize(fileString);
  console.log('tokenized file: ', tokenizedFile);
});
