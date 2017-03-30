var FoodChain = function() {};

var endOfSong = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

var animals = ['blank','fly','spider','bird','cat', 'dog','goat', 'cow'];

var animalPhrases = [
	'',
	'',
	'She swallowed the spider to catch the fly.\n',
	'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
	'She swallowed the cat to catch the bird.\n',
	'She swallowed the dog to catch the cat.\n',
	'She swallowed the goat to catch the dog.\n',
	'She swallowed the cow to catch the goat.\n',
	''
];

var uniqueVerses = [
	'',
	'',
	'It wriggled and jiggled and tickled inside her.\n',
	'How absurd to swallow a bird!\n',
	'Imagine that, to swallow a cat!\n',
	'What a hog, to swallow a dog!\n',
	'Just opened her throat and swallowed a goat!\n',
	'I don\'t know how she swallowed a cow!\n'
];

function getBeginningOfSong(animal) {
	return 'I know an old lady who swallowed a ' + animal + '.\n';
}

function buildVerse(animal, action, uniqueVerse) {
	return getBeginningOfSong(animal) + uniqueVerse + action + endOfSong;
}

function buildOtherLyrics(num) {
	var otherLyrics = '';
	for (var i = num; i >= 2; i--) {
		otherLyrics += animalPhrases[i];
	}
	return otherLyrics;
}

FoodChain.prototype.verse = function(num) {
	var animal = animals[num];
	var otherLyrics = buildOtherLyrics(num);
	var uniqueVerse = uniqueVerses[num];
	if (num == 8) {
		return 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n';
	}
	return buildVerse(animal, otherLyrics, uniqueVerse);
};

FoodChain.prototype.verses = function(num1, num2) {
	var songs = '';
	for (var i = num1; i <= num2; i++) {
		songs += this.verse(i) + '\n';
	}
	return songs;
};

module.exports = FoodChain;