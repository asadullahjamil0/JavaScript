let x = 20;
const y = 45;

// Arrow function
const func = (x, y) => {
    return x + y;
}
document.write(func(2, 3) + `<br></br>`);

// maps
let myMap = new Map();
myMap.set(1, "Lahore");
myMap.set(2, "Karachi");
myMap.set(3, "Islamabad");
myMap.set(4, "Sialkot");


// for both values and keys
for (let [key, value] of myMap) {
    document.write(`key is ${key} and Value is ${value}` + `<br></br>`)
}

// Set objects
let sample = new Set();

sample.add(`Hello World`);
sample.add(3085647892);
sample.add(`Wake Up Muslim Ummah`);
sample.add(`This is the time to reclaim shariah`);
for (const value of sample) {
    document.write(value + `<br></br>`);
}