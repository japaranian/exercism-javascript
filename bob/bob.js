var Bob = function() {};
// Bob answers 'Sure.' if you ask him a question.
// He answers 'Whoa, chill out!' if you yell at him.
// He says 'Fine. Be that way!' if you address him without actually saying
// anything.
// He answers 'Whatever.' to anything else.

  // it('only numbers', function() {
  //   var result = bob.hey('1, 2, 3');
  //   expect(result).toEqual('Whatever.');
  // });

function isUpperCase(str) {
	return str === str.toUpperCase();
}

function includesLetter(str) {
	return str.match(/[a-z]/i)
}

Bob.prototype.hey = function(statement) {
	isUpperCase(statement);
	if ( isUpperCase(statement) === true && includesLetter(statement) ) {
		return	'Whoa, chill out!';
	} else if (statement.slice(-1) == ".") {
			return 'Whatever.';
	} else if (statement.slice(-1) == "?") {
		return 'Sure.';
	} else if (isNaN(statement)) {
		return 'Whatever.';
	}else {
		return 'Fine. Be that way!';
	}
};

module.exports = Bob;

