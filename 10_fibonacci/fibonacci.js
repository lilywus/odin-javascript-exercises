const fibonacci = function(position) {
    if (position < 0) return "OOPS";

    let fibArray = [0, 1];
    for (let i = 2; i <= position; i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1])
    }
    return fibArray[position];
};

// Do not edit below this line
module.exports = fibonacci;
