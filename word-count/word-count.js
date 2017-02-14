var Words = function(){};

Words.prototype.count = function(input) {
	var specialCharacters = '!!&@$%^&';
	input = input.replace(specialCharacters, '');
	input = input.replace(/:/g, '');
	input = input.replace(/\s\s+/g, ' ');
	input = input.toLowerCase();
	var wordCount = {};
	var words = input.split(/[ ,]/);
	for (var i = 0; i < words.length; i++) {
		word = words[i];
		if (word in wordCount) {
			wordCount[word] += 1;
		} else {
			wordCount[word]= 1;
		}
	}
	return wordCount;
};

module.exports = Words;



  // it('counts one word', function() {
  //   var expectedCounts = { word: 1 };
  //   expect(words.count('word')).toEqual(expectedCounts);
  // });

// !!&@$%^&