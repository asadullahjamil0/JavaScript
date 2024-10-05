let arr = [2, 14, 76, 13, 45, 19, 22, 26]

const checkCond = ((value) => {
    return value === 19;
})
document.write(arr.findIndex(checkCond) + `<br> </br>`);

// finding prime number by findIndex method.
function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false
    }
    for (let i = 3; i < Math.sqrt(element); i += 2) {
        if (element % i === 0) {
            return false;
        }
    }
    return true;
}

document.write([1, 2, 4, 5, 6, 8, 9].findIndex(isPrime) + `<br> </br>`);

// Math methods
//trunc - cuts away the decimal places
let t = 65.443;
document.write(Math.trunc(t) + `<br> </br>`)
// round - round the integer to closest
let r = 56.89;
document.write(Math.round(r) + `<br> </br>`)
// floor - round towards its lower integer
let f = 23.43;
document.write(Math.floor(f) + `<br> </br>`)
// ceil - round towards its highest integer
let i = 23.43;
document.write(Math.ceil(i) + `<br> </br>`);

// Strings methods
let text = "Hey i am Asadullah Jamil.";
// startsWith method
document.write(text.startsWith("Hey") + `<br> </br>`);
// endsWith method
document.write(text.endsWith("Jamil.") + `<br> </br>`);

//Object properties - objects is a collection of properties and properties are association with names(keys) and values.
let student_1 = {
    name: "AsadUllah Jamil",
    Age: 23,
    Education: "Computer Science"
}
document.write(student_1.name + `<br> </br>`);
document.write(student_1.Education + `<br> </br>`);

// Object method is an action which an object is able to perform
let student_2 = {
    name: "Mujahid",
    Age: 34,
    Education: "Chemistry"
}

//Object.assign
Object.assign(student_1, student_2);
document.write(student_1.name + ` this is after assign <br> </br>`);
document.write(student_1.Education + ` this is after assign <br> </br>`);
//Object.entries - returns keys/values of an object
document.write(`These are entries of an object student_1 = ` + Object.entries(student_1) + `<br>`);
//Object.keys - is similar to entries but it returns only keys 
document.write(`These are keys of an object student_1 = ` + Object.keys(student_1 ) + `<br>`);
//Object.values - is similar to entries but it returns only values 
document.write(`These are values of an object student_1 = ` + Object.values(student_1) + `<br>`);
