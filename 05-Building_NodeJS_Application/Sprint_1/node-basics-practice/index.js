//Importing all Files with there Functions 
const { add } = require('./Functions/Addition')
const { sub } = require('./Functions/Substraction')
const { mul } = require('./Functions/Multiplication')
const { div } = require('./Functions/Division')

console.log("Addition is:", add(2, 3))
console.log("Substraction is:", sub(5, 2))
console.log("Multiplication is:", mul(5, 5))
console.log("Division is:", div(10, 2))