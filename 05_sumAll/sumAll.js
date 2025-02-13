const sumAll = function(num1, num2) {
    if ((typeof num1 != "number") || (typeof num2 != "number")) return "ERROR";
    if ((num1 < 0)|| (num2 < 0)) return "ERROR";

    let lower, upper = 0;
    if (num1 < num2) {
        lower = num1;
        upper = num2;
    }
    else {
        lower = num2;
        upper = num1;
    }

    let sum = 0;
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
