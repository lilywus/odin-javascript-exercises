const palindromes = function(word) {
    let keepThese = "abcdefghijklmnopqrstuvwxyz1234567890";
    let cleanWord = word.toLowerCase().split("")
                        .filter((current) => keepThese.includes(current))
                        .join("");

    let backwards = cleanWord.split("").reverse().join("");

    if (cleanWord == backwards) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
