// To check if number is more than once
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9]
// let double = []
// let set = new Set();

// for (const number of num) {
//     if (!set.has(number)) {
//         double.push(number * 2)
//         set.add(number)
//     }
// }
// console.log(double)


// To check if number is negative in an array
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, -8, 9, 9]
let double = []
let set = new Set();

for (const number of num) {
    if (number < 0) {
        break;
    }
    if (!set.has(number)) {
        double.push(number * 2)
        set.add(number)
    }
}
console.log(double)