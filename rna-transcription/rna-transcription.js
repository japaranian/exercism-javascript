var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(strand) {
	var lookUp = {'G' : 'C', 'C':'G', 'T' : 'A', 'A' : 'U'};
	var new_strand = '';
	for (var i = 0; i < strand.length; i++) {
		oldLetter = strand[i];
		new_letter = lookUp[oldLetter];
		if (new_letter === undefined) {
			throw Error('Invalid input');
		} else {
		new_strand +=new_letter;
		}
	}

	return new_strand;

};

module.exports = dnaTranscriber;