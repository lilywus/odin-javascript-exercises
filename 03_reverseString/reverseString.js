const reverseString = function(string) {
    let message = '';
    for (let i = 0; i < string.length; i++) {
        negative = string.length - 1 - i;
        message += string[negative];
    }
    return message;
};

// Do not edit below this line
module.exports = reverseString;
