const findTheOldest = function(arg) {
    
    const newArray = arg.map(v => {
        if(!v.yearOfDeath) {
            v.yearOfDeath = new Date().getFullYear()
        }
        v.age = v.yearOfDeath - v.yearOfBirth
    });

    console.log(arg)

    const oldest = arg.sort((a, b) => b.age-a.age)
        
    console.log(oldest[0])

    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
