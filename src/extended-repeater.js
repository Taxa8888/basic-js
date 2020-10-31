module.exports = function repeater(str, options) {
  let strAddition = '';
  let result = '';
  if (options.separator === undefined) options.separator = '+';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.addition === undefined) options.additionRepeatTimes = 0;
  if (options.additionSeparator === undefined) options.additionSeparator = '';
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;

  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    if (options.additionRepeatTimes !== i) {
      strAddition += options.addition + options.additionSeparator;
    } else {
      strAddition += options.addition;
    }
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    if (options.repeatTimes !== i) {
      result += str + strAddition + options.separator ;
    } else {
      result += str + strAddition;
    }
  }
  return result;
};