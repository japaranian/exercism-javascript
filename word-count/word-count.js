var Words = function(){};

Words.prototype.count= function(input){
    const wordCount = {};

    let inputArr = input.toLowerCase().replace(/[^A-Za-z0-9" "'\u00C0-\u017F\u0430-\u044f]/g, " ").split(" ");

    
    inputArr.map(function(word){
        if (word[0] === "'"){
            word = word.replace("'", "");
        }
        if (word[word.length-1] === "'"){
            word = word.replace("'", "");
        }

        if (wordCount[word] > 0){
            wordCount[word]++;
        } else if (wordCount[word] === undefined && word !== ""){
            wordCount[word] = 1;
        } else if (wordCount[word] !== undefined){
            wordCount[word] = 1
        }
    })

    return wordCount
}

module.exports = Words;