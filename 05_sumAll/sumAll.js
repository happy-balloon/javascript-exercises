const sumAll = function(a, b) { 
    let sum, x;
    if (typeof a == "number" && typeof b == "number") {   
        if (a>=0 && b>=0) {
            sum = 0;
            x = b - a;
            let c = Math.abs(x);
            if (x >= 0) {
                for (let i = 0; i<=c; i++) {
                    sum += a;
                    a++;
                }
            }
            else {
                for (let i = 0; i<=c; i++) {
                    sum += a;
                    a--;
                }
            }
            return sum;
        } 
        else
            return "ERROR"
    } 
    else
        return "ERROR"
    
};

// Do not edit below this line
module.exports = sumAll;
