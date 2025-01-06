function sumOfTripledEvens(array) {
    return array
            .filter((num) => num % 2 === 0)
            .map((num) => num * 3)
            .reduce((sum, num) => sum + num)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfTripledEvens(arr));

