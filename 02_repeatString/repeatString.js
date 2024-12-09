const repeatString = function(string, numOfTimes) {
    if(numOfTimes < 0) 
        return "ERROR";

    
    return_string = "";

    for(let i = 0; i < numOfTimes; i++){
        return_string += string;
    }

    return return_string;
};

// Do not edit below this line
module.exports = repeatString;
