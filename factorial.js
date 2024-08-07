a = prompt("Please enter the number for factorial: ")
let arr1 = [];

for (let index = 1; index <= a; index++) {
    arr1.push(index);

}

const red = (a, b) => {
    return a * b;
}

console.log(arr1.reduce(red))
