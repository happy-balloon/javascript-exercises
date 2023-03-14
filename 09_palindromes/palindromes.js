const palindromes = function (str) {
    let a = ""; let c = "";
    let newStr = str.replace(/[^a-zA-Z]/g,'')
    let b = newStr.toLowerCase();

    for (let i = b.length - 1; i >= 0;i--) {
        a = b.substr(i,1)
        c = c.concat(a);
    }
    console.log(c)
    return (c === b) ? true : false
};

// Do not edit below this line
module.exports = palindromes;
