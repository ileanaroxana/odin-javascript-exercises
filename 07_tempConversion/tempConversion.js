const convertToCelsius = function(temp) {
  return roundToOneDec((temp - 32) * 5 / 9);
};

const convertToFahrenheit = function(temp) {
  return roundToOneDec(temp * 9 / 5 + 32);
};

function roundToOneDec(n) {
  return Math.round(n * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
