var Robot = function(){
	this.name = buildName();

};

Robot.prototype.reset = function() {
	this.name = buildName();
};

function buildName() {
	return getTwoLetters() + getThreeDigitNumber();
}

function getTwoLetters() {
	var letters = '';
	var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (var i = 0; i < 2; i ++) {
		letters += alpha.charAt(Math.floor(Math.random() * alpha.length));
	}
	return letters;
}

function getThreeDigitNumber() {
  return getSingleDigit() + getSingleDigit() + getSingleDigit();
}

function getSingleDigit() {
	min = 0;
	max = 9;
	digit = Math.floor(Math.random() * (max - min + 1)) + min;
	return digit.toString();
}

module.exports = Robot;