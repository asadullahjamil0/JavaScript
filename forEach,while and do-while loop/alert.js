// For loop to iterate in array

let cities = ["Lahore", "Karachi", "Islamabad", "Sialkot", "Faislabad"];
// for (let index = 0; index < cities.length; index++) {
//     console.log(`Hello, ${cities[index]}`);

// }

// Now we will use forEach
cities.forEach(function (element) {
    console.log(`Hello, ${element} to modern javaScript`)
})

// we can also use for of loop for more efficiency

for (const element of cities) {
    console.log(`Hello, ${element} to modern javaScript again`)
}

let employee = {
    name: "AsadUllah",
    Age: 22,
    city: "Sheikhpura",
}

// we use for in loop to iterate in objects in javaScript
for (const key in employee) {
    console.log(`The ${key} of the employee is ${employee[key]}`);
}

// While loop in js
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

// Do-while loop 
let j = 34;
do {
    console.log(`${j} is less than 4`)
} while (j < 4);

const fruit = "Mango";
switch (fruit) {
    case "Banana":
        console.log("This is banana")
        break;

    case "Papayas":
        console.log("This is Papayas");
        break;

    case "Mango":
        console.log("This is Mango");
        break;

    default:
        console.log("This is not a fruit")
        break;
}