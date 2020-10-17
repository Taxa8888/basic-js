const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    members.forEach(function (name) {
      if (typeof name === 'string') {
        name = name.trim();
        arr.push(name[0].toUpperCase());
      }
    })
    return arr.sort().join('');
  } else {
    return false;
  }
};



// let members = [
//   'amelia',
//   'ruby',
//   'lily',
//   'grace',
//   'millie',
//   'daisy',
//   'freya',
//   'erin',
//   'megan',
//   'jasmine',
//   'brooke',
// ]
// console.log(createDreamTeam(members))