const convertToCelsius = function(f) {
  let c = 0, x;
  c = (f - 32)*5/9
  x = parseFloat(Number(c).toFixed(1));
  return x;
  // if (Number.isInteger(x)) return Number(x).toFixed(0);
  // else return x;
};

const convertToFahrenheit = function(c) {
  let f = 0;
  f = (c * 9 / 5 ) + 32 
  return parseFloat(Number(f).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
