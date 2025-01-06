const fibonacci = function(x) {
    if(x < 0) return "OOPS";
    if (x == 0) return 0;
    if (x < 2) return 1;

    let count = 1;
    let current = 1;
    let prev = 0;
    let next = 0;
    while(count < x){
        console.log(prev);
        
        next = prev + current;
        prev = current;
        current = next;

        count++;
    }

    return next;

};

// Do not edit below this line
module.exports = fibonacci;
