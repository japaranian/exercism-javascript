var Anagram = function(string) {
	this.string = string;
	this.sortedString = sortString(string);
};

function sortString(s) {
	return s.toLowerCase().split('').sort().join('');
}

function isSameWord(first, second) {
	return first.toLowerCase() === second.toLowerCase();
}

function hasVariableNumberOfArguments(args) {
	return typeof args[0] === 'string';
}

Anagram.prototype.filterResult = function(string1, comparison) {
	var matches = [];
	for (var i = 0; i < comparison.length; i++) {
		if (isSameWord(string1, comparison[i])) {
			continue;
	}
	var sortedWord = sortString(comparison[i]);
		if ( sortedWord === this.sortedString) {
			matches.push(comparison[i]);
		}
	}
	return matches;
};

Anagram.prototype.matches = function(input) {
	if (hasVariableNumberOfArguments(arguments)) {
		return this.filterResult(this.string, arguments);
	}
	return this.filterResult(this.string, input);
};

module.exports = Anagram;