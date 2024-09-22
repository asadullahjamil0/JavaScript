// Objects in JavaScript 

const mySum = Symbol("key1")

const myDetails = {
    name: "Asad Ullah",
    "full name": "Asadullah jamil",
    [mySum]: "myKey1",
    age: 22,
    isOnline: false,
    lastOnline: ["Monday", "Saturday"],
    email: "asadullahjamilchaudhry@gmail.com"
}


// console.log(myDetails.name)
// console.log(myDetails["full name"])
// console.log(myDetails[mySum]);


myDetails.email = "asadullahjamilchaudhry@hotmail.com"
// console.log(myDetails)

// we can also freeze objects
// Object.freeze(myDetails);
myDetails.email = "asadullahjamilchaudhry@microsoft.com"
// console.log(myDetails)

myDetails.greeting = function () {
    return "hello how are you!";
};
console.log(myDetails.greeting());

myDetails.greeting_2 = function () {
    console.log("hello ", `${this.name}`)
};
console.log(myDetails.greeting_2());
