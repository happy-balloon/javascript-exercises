const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arg) {
	if (arg.length == 0) return 0;
  let total = arg.reduce ((s,a) => s + a)
  return total;
};

const multiply = function(arg) {
  let total = arg.reduce((m,a) => m*a);
  return total;
};

const power = function(a,b) {
  let p = 1;
  while (b != 0) {
    p = p * a;
    b--;
  }
	return p
};

const factorial = function(a) {
  let f = 1;
  let i = a;
  while (a > 0) {
    f = f * a;
    a--;
  }
  return f;
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
