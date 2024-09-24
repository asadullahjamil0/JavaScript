let num1 = "99";
// for number
const number_1 = Number(num1);
console.log(number_1 + 23);
// for integer
// parseInt convert decimal value into integer and it can also convert string of numbers into integer value
let num2 = "90.345 years";
const number_2 = parseInt(num1)
console.log(number_2)
// for decimal value
// parseFloat show value in decimal form and it can also convert string of numbers into integer value
let num3 = "890.956"
const number_3 = parseFloat(num3)
console.log(number_3)
// isFinite and isInteger function
// isFinit check either it is finite number or not
let num4 = "50";
const number_4 = isFinite(num4)
console.log(number_4)
// isIntgere check if it is integer or not
let num5 = 50;
const number_5 = Number.isInteger(num5)
console.log(number_5)
// toFixed and toPrecision functions
// toFixed fixe the value after decimal point
let num6 = 50.5378;
const number_6 = num6.toFixed(2)
console.log(number_6)
// toPresision overall maniupulate the value
let num7 = 50.5378;
const number_7 = num6.toPrecision(5)
console.log(number_7)