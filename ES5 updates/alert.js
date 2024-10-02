"use strict"; /*- is used to check striclty syntax errors*/

let a = 10;
console.log(a);
function test() {
    let b = 20;
    console.log(b);
}
test();

// string.trim()
let Name = "    asadUllah  "
console.log(Name.trim());

// Array map
let arr_1 = [1, 2, 3, 4, 5, 6]
const newArr = arr_1.map((num) => {
    return num * num;
})
console.log(newArr)

// Array filter
let arr_2 = [1, 2, 3, 4, 5, 6]
const newArr_1 = arr_2.filter((num) => {
    return (num % 2 === 0);
})
console.log(newArr_1);

// Array Reduce
let arr_3 = [1, 2, 3, 4, 5, 6, 7]
const answer = arr_3.reduce((h1, h2) => {
    return h1 * h2;
})
console.log(answer);

// Array.isArray() is used to check if data type is an array
let arr_4 = [1, 2, 3, 4, 5, 6, 7]
let checkArray = "Hey this is not an array!";
console.log(Array.isArray(arr_4));
console.log(Array.isArray(checkArray));

// forEach method 
let arr_5 = [1, 2, 3, 4, 5, 6]
const eachElement = arr_5.forEach((num) => {
    console.log(num * num);
})

// Multline strings 
let multiLine = `hey how are you
I am fine how are you
i am good to `;
console.log(multiLine);

// String[index] access
let stringName = "Asadullah jamil";
for (let i = 0; i < stringName.length; i++) {
    console.log(stringName[i]);
}

//some() method
let ages = [12, 45, 23, 13, 28, 18]

const checkSome = ages.some(checkAdult);
function checkAdult(age) {
    return age >= 18;
}
console.log(checkSome);

// indexOf method
let result = ages.indexOf(23, 0)
document.write(result + "<br></br>")

//lastIndexOf method
let result_1 = ages.lastIndexOf(45, 4)
document.write(result_1 + "<br></br>")

let personalDetails = JSON.parse(`{"name":"AsadUllah","Age":23,"City":"Sheikhupura"}`);
document.write(personalDetails.name);

let myDate = new Date();
console.log(myDate.toLocaleString());
// Date.now() method
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = day * 365;
let myTimeSwamp = Math.floor(Date.now() / year);
console.log(myTimeSwamp);