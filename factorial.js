num1 = prompt("Please enter the number for factorial: ")
let arr1 = [];

for (let index = 1; index <= num1; index++) {
    arr1.push(index);

}

const red = (a, b) => {
    return a * b;
}

console.log(arr1.reduce(red))


// Anohter method to calculate the factorial
let a = 6
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    console.log(c)
}

factorial(a)