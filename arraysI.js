let arrayI = [123, 45, 65, 90, 34]

for (let index = 0; index < arrayI.length; index++) {
    const element = arrayI[index];
    if (element > 100) {
        console.log("This is " + element + " and it is greater than 100");
    }
    else {
        console.log("This is " + element + " and it is less than 100");
    }
}

// For each loop 
// arrayI.forEach((value, index, array) => {
//     console.log("this is value:" + value, " and this is index:"+index, array)
// })


// for in loop
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }



// for-of loop
// for (const value of arrayI) {
//     if (value > 100) {
//         console.log("this is " + value + " number is greater than 100")
//     }
//     else {
//         console.log("this is " + value + " number is less than 100")
//     }
// }


// map() in js
// let arr = [5, 3, 9, 7, 8]
// let newArr = arr.map((value) => {
//     return value ** 2;
// })
// console.log(newArr)


// usage of filter
// const greaterThanSeven = (e) => {
//     if (e > 7) {
//         return true;
//     }
//     return false;
// }
// console.log(arr.filter(greaterThanSeven))


// reduce method
let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a + b;
}
console.log(arr2.reduce(red))




// Some of arrays properties to manipulate the array
// arrayI.sort();
// arrayI.reverse();
// arrayI.splice(1,3);
// arrayI.slice(1,2);
// arrayI.push(12);
// arrayI.pop();
// arrayI.toString();
// arrayI.shift();
// arrayI.unshift();