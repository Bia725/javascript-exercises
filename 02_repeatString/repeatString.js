const repeatString = function() {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
};

// Do not edit below this line
module.exports = repeatString;
