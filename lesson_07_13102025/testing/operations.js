module.exports.multply = function (a, b) {
    console.log("params: ", a, b, (a * b))
    return a * b;
};

module.exports.add = function (a, b) {
    console.log("params: ", a, b, (a + b))
    return a + b;
};

module.exports.subtr = function (a, b) {
    console.log("params: ", a, b, (a - b))
    return a - b;
};

module.exports.division = function (a, b) {
    console.log("params: ", a, b, (a / b))
    return a / b;
};

module.exports.funct_abch = function (a, b, c, h) {
    const result = a + b * (c - h * h);
    console.log("params: ", a, b, c, h, (result))
    return result;
};


