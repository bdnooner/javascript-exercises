const removeFromArray = function(arr, ...elements) {
    for(let i = 0; i < elements.length; i++){
        while(arr.indexOf(elements[i]) != -1){
            arr.splice(arr.indexOf(elements[i]), 1);
        }
    }
    return arr;
    
};


// Do not edit below this line
module.exports = removeFromArray;
