const reverseString = function(strings) {
    let reverse = [];
    let stringsArray = Array.from(strings);
    let x = strings.length;
    for (let i = 0; i<= (x-1); i++) {
        reverse[i] = stringsArray.pop();
    }
    return reverse.join('')
};

// Do not edit below this line
module.exports = reverseString;
