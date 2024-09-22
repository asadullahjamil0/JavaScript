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