const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a, b) {
  let result = 1;
	for (let i = 0; i < b; i++)
    result *= a;
  return result;
};

const factorial = function(a) {
	if (a == 0) return 1;
  let result = 1;
  for (let i = result; i <= a; i++ )
    result *= i;
  return result;
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
