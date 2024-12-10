const sumAll = function(x, y) {
    if(x < 0 || y < 0) {
        return "ERROR";
    }
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }
    if(typeof x != 'number' || typeof y != 'number'){
        return "ERROR";
    }
    
    let sum = 0;
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
