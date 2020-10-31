const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newArr: [],

  getLength() {
    return this.newArr.length();
  },

  addLink(value) {
    this.newArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!isNaN(position) && position > 0 && position <= this.newArr.length) {
      this.newArr.splice(position - 1, 1);
    } else {
      this.newArr = [];
      throw Error;
    }
    return this;
  },

  reverseChain() {
    this.newArr.reverse();
    return this;
  },

  finishChain() {
    this.finish = this.newArr.join("~~");
    this.newArr.length = 0;
    return this.finish;
  },
};

module.exports = chainMaker;
