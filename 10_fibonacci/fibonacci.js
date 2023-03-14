const fibonacci = function(a) {
    let i, f, c, b;
    b = 1; c = 1;
    if (a <0) return "OOPS"
    for (i = 3; i <= Number(a); i++) {
        f = b + c;
        b = c;
        c = f;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
