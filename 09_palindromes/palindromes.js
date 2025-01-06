function removePunctuation(string) {
    return string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
}

const palindromes = function (string) {
    let str = removePunctuation(string).replaceAll(" ", "").toLowerCase();
    let reverse = str.split("").reverse().join("");

    return reverse === str;
};

// Do not edit below this line
module.exports = palindromes;
