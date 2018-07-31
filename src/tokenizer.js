'use strict';

const fs = require('fs');
const fileReader = require('./file-reader');

const fileUrl = `${__dirname}/../reverse-string.js`;

const tokenizer = module.exports = {};
let  obtainedCharacter = ' ';
let currentString;
let lexeme;
let currentLexeme;

tokenizer.getFirstCharacter = (input) => {
  let index = 0;
  while( obtainedCharacter === ' '
    || obtainedCharacter === '\n'
    || obtainedCharacter === '\t'
    ) {
    index += 1;
    obtainedCharacter = input[index];
  }
  return obtainedCharacter;
};


fileReader.read(fileUrl, (fileString) => {
  console.log('fileString: ', fileString);
 console.log('first character: ', tokenizer.getFirstCharacter(fileString));
});
