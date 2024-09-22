function myFunction() {
    console.log("Hello this is practise for JS :)");
}

// Function with parameters
function sumFunction(x, y) {
    console.log(x + y)
}

// Function with something return
function sumFunction_1(x, y) {
    sum = x + y;
    return sum;
    // we cant write console log after return
    console.log(sum)
}

let val = sumFunction_1(23, 56)

// Arrow Function
const arrowSum = (a, b) => {
    return a + b;
}
// Arrow multiply Function
const multiArrow = (a, b) => {
    return a * b;
}

// Count vowels and make a function of it
function countVowel(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count)
}
// Count vowels wtih arrow function
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

// for each function
let arr = ["Lahore", "Karachi", "Islamabad", "Sheikhupura", "Sialkot"]
arr.forEach((val, idx, arr) => {
    if (val === "Sheikhupura") {
        console.log("Welcome to " + val.toUpperCase(), idx, arr);
    }
})

// Map function
let arr_1 = [4, 8, 3, 7, 6]
let calSqr = arr_1.map((sqr) => {
    return (sqr * sqr);
})
console.log(calSqr)

//filter function
let arr_2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const calcMod = arr_2.filter((val) => {
    return val % 2 === 0;
})
console.log(calcMod);

// filter_function example
let marks = [34, 56, 23, 94, 93, 89]
const findMarks = marks.filter((val) => {
    return val > 90;
})
console.log("congrate your marks are: " + findMarks)

// Reduce function
let arr_3 = [132, 203, 33, 4, 5, 6];
const sumWithInitial = arr_3.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(sumWithInitial)

// Some practise examples of functions
let n = prompt("Enter your number: ")
let arr_4 = [];
for (let i = 1; i <= n; i++) {
    arr_4[i - 1] = i;
}
console.log(arr_4)

const sumAllNums = arr_4.reduce((prev, curr) => {
    return prev + curr
})
console.log(sumAllNums)


const multiAllNums = arr_4.reduce((prev, curr) => {
    return prev * curr
})
console.log(multiAllNums)