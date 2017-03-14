var Isogram = function(input) {
	this.input = input;
};

Isogram.prototype.isIsogram = function() {
	uniqueLetters = '';
	this.input = this.input.replace(/[\s-]/g, "").toLowerCase();
	for (var i = 0; i < this.input.length; i++) {
		if (!uniqueLetters.includes(this.input[i])) {
			uniqueLetters = uniqueLetters.concat(this.input[i]);
		}
	}
	return uniqueLetters === this.input;
};

module.exports = Isogram;