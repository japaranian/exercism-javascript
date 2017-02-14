var hamming = function() {};

hamming.prototype.compute = function(A, B) {
	var array1 = A.split('');
	var array2 = B.split('');
	var difference = 0;
	if (array1.length == array2.length) {
		for (var i = 0; i < array1.length; i++) {
			if (array1[i] != array2[i]) {
				difference++;
			}
		}
	} else {
		throw Error ('DNA strands must be of equal length.');
	}
	return difference;
};

module.exports = hamming;