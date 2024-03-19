const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => total + currentItem, 0)
};

const multiply = function(array) {
  return array.reduce((product, currentItem) => product * currentItem, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n == 0) return 1;
  let factorProduct = 1;
	for (let i = n; i > 0; i--) {
    factorProduct *= i;
  }
  return factorProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
