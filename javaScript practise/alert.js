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