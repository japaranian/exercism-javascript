var BeerSong = function() {};

function getFirstVerse(n) {
	var bottle = pluralizeBottle(n)
	return n + bottle + " of beer on the wall, " + n + bottle + " of beer.\n";
};

function getSecondVerse(n) {
	if (n === 0) {
		return "Take it down and pass it around, no more bottles of beer on the wall.\n";
	};
	var bottle = pluralizeBottle(n)
	return "Take one down and pass it around, " + n + bottle + " of beer on the wall.\n"
}

function pluralizeBottle(n) {
	if (n === 1) {
		return " bottle";
	} else {
		return " bottles";
	};
}

BeerSong.prototype.verse = function(num) {
	if (num === 0) {
		return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	};
	var result = 	getFirstVerse(num) + getSecondVerse(num-1);
	return result;
};

BeerSong.prototype.sing = function(from, to) {
	if (to === undefined) {
		to = 0;
	};

	var result = ""
	for (var i = from; i >= to; i--){
		if (i === to) {
			result += this.verse(i);
		}else {
			result += this.verse(i) + "\n";			
		}
	}
	return result;
}

module.exports = BeerSong;