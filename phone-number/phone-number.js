var PhoneNumber = function(tel) {
	this.tel = tel;
};


PhoneNumber.prototype.number = function() {
	var tel = this.tel.replace(/[^0-9]/g, "");
	if (tel.length === 10) {
		return tel;
	} else if (tel.length === 11) {
		if (tel.charAt(0) === '1') {
			return tel.slice(1);
		}
	}
	return "0000000000";
};

PhoneNumber.prototype.areaCode = function() {
	return this.tel.slice(0, 3);
};

PhoneNumber.prototype.lastSeven = function() {
	return this.tel.slice(3, 6) + "-" + this.tel.slice(6);
};

PhoneNumber.prototype.toString = function() {
	return "(" + this.areaCode() + ") " + this.lastSeven();
};

module.exports = PhoneNumber;