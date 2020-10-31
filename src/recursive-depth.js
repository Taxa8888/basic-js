module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, str = []) { 
    str.push(count);   
    arr.forEach(element => {
      if (Array.isArray(element)) {         
        this.calculateDepth(element, count + 1, str) 
      }  
    });
    return str.reduce((max, element) => {
      if (element > max) {
          return element;
      }
      else {
          return max;
      }
  });
  }
}

