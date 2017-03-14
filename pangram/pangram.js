var Pangram = function(input){
  this.input = input;
};

var alpha = "abcdefghijklmnopqrstuvwxyz";

function lowerCase(input) {
  return input.toLowerCase();
}

function stripWhiteSpace(input) {
  return input.replace(/[^a-z]/g, "");
}

function deDup(input) {
  uniqueLetters = '';
  for (var i = 0; i < input.length; i++) {
    if (!uniqueLetters.includes(input[i])) {
      uniqueLetters = uniqueLetters.concat(input[i]);
    }
  }
  return uniqueLetters;
}

function sortString(input) {
  return Array.from(input).sort().join('');
}

Pangram.prototype.isPangram = function() {
  this.input = lowerCase(this.input);
  this.input = stripWhiteSpace(this.input);
  this.input = sortString(this.input);
  this.input = deDup(this.input);

  return this.input === alpha;
};

module.exports = Pangram;