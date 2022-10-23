const _ = require("lodash");

const Add = (num1, num2) => {
    let ans = _.add(num1, num2);
    return ans;
}

const Sub = (num1, num2) => {
    let ans = _.subtract(num1, num2);
    return ans;

}

const Mul = (num1, num2) => {
    let ans = _.multiply(num1, num2);
    return ans;
}

const Div = (num1, num2) => {
    let ans = _.divide(num1, num2);
    return ans
}

module.exports = {
    Add,
    Sub,
    Mul,
    Div
}

