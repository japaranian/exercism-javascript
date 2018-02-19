var drops = function() {
	this.convert = function(number) {
		var response = '';
		var logic = {3: 'Pling', 5: 'Plang', 7: 'Plong'}
		for (var key in logic) {
			if (number % key === 0) {
				response += logic[key];
			}
		}
		if (response === '') {
			response += number;
		}
	return response
	}
}

module.exports = drops;