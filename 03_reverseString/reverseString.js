const reverseString = function(word) {
    //define a variable to save the reverse string
    let normalString = word;
    //take one char at a time from behind
    let reverseString = "";
    for (let i = 1; i <= normalString.length; i++){
        reverseString += normalString.at(-i);
    }
    return reverseString;   
};

// Do not edit below this line
module.exports = reverseString;
