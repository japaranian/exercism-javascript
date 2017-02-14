var Gigasecond = function(input) {
	this.startDate = input;
};

Gigasecond.prototype.date = function() {
	var inMillisecond = this.startDate.getTime();
	var inSeconds =  (inMillisecond/1000);
	var billionSecondsLater = inSeconds + 1000000000;
	return new Date(billionSecondsLater * 1000);
};

module.exports = Gigasecond;

  // it('tells a gigasecond anniversary since midnight', function() {
  //   var gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
  //   var expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40));
  //   expect(gs.date()).toEqual(expectedDate);
  // });