
var School = function() {
	this.db = {};
};
//create an object called 'School', intializing variable db and setting it equal to an empty object.

School.prototype.add = function(name, grade) {
	if (grade in this.db) {
		this.db[grade].push(name);
		this.db[grade].sort();
	} else {
		this.db[grade] = [name];
	}
};

School.prototype.roster = function() {
	return this.db;
};

School.prototype.grade = function(grade) {
	if (grade in this.db) {
		return this.db[grade];
	} else {
		return [];
	}
};

module.exports = School;