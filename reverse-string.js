'use strict';

const reverseString = module.exports = {};

reverseString.reverse = (str) => {
  let arr = [];
  for (let i in str) {
    arr.unshift(str[i]);
  }
  return(arr.join(''));
};
