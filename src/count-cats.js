const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(array => array.forEach(function(el) {
    if (el === '^^') {
     count += 1;
    }
  }))
  return count;
};