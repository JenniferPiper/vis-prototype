'use strict';

const tokenizer = module.exports = {};
// let  obtainedCharacter = ' ';
// let currentString;
// let lexeme;
// let currentLexeme;

// tokenizer.getFirstCharacter = (input) => {
//   let index = 0;
//   while( obtainedCharacter === ' '
//     || obtainedCharacter === '\n'
//     || obtainedCharacter === '\t'
//     ) {
//     index += 1;
//     obtainedCharacter = input[index];
//   }
//   return obtainedCharacter;
// };
//

tokenizer.tokenize = (inputString) => {
  const wordArray = inputString.split(' ');
  return wordArray;
};

