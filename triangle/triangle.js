var Triangle = function(a,b,c){
    this.a = a
    this.b = b
    this.c = c
}

Triangle.prototype.kind = function(){
    var sides = [this.a, this.b, this.c].sort(function(x,y){return x-y});

    if (sides[0] + sides[1] < sides[2]) {throw Error()}

    var objectLength = {}

    sides.forEach(function(side){

        if (side<=0){throw Error()}

        if(objectLength[side.toString()] > 0){
            objectLength[side.toString()]++
        } else {
            objectLength[side.toString()] = 1
        }
    })
    var equalSides = Object.keys(objectLength).length;

    if(equalSides === 1){
        return "equilateral";
    } else if (equalSides === 2){
        return "isosceles";
    } else{
        return "scalene"
    }
}

module.exports = Triangle;