const removeFromArray = function(numbers, ...req) {
    let arrayIndex = [], i, j = 0;
    req.forEach((t) => { 3
        if (numbers.includes(t)) {
            arrayIndex = numbers.indexOf(t);
            numbers.splice(arrayIndex, 1);
        }
    });
    return numbers
};

module.exports = removeFromArray;
