'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

fileReader.read = (filePath, callback) => {
  fs.readFile(filePath, (error, fileBuffer) => {
    if (error) {
      throw error;
    }
    const fileString = fileBuffer.toString('utf8');
    return callback(fileString);
  })
};
