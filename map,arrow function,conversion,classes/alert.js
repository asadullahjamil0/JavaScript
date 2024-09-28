let myMap = new Map();

myMap.set(1, "Lahore");
myMap.set(2, "Karachi");
myMap.set(3, "Islamabad");
myMap.set(4, "Sialkot");

// for both values and keys
for (let [key, value] of myMap) {
    console.log(`key is ${key} and Value is ${value}`)
}

// This is by for of loop
// for just keys of map
for (let key of myMap.keys()) {
    console.log(`key is ${key}`)
}
// for just values
for (let value of myMap.values()) {
    console.log(`Value is ${value}`)
}

// by for each loop
myMap.forEach((value, key) => {
    console.log(`Value is ${value} and key is ${key}`)
});

// Map methods
// to check size
console.log(myMap.size)
// to delete any key value
myMap.delete(2)
console.log(myMap);
// we can also clear all the elements by using clear() function
// myMap.clear();
myMap.has("Lahore")

let obj = {
    username: "Asadullah",
    password: 999,
    message: function () {
        console.log(`${this.username}`)
        console.log(this);
    }
}

obj.message();
obj.username = "Jamil"
obj.message();

function one() {
    console.log(this);
}
one();

const sumNum = (a, b) => {
    return a + b;
}

console.log(sumNum(2, 3));