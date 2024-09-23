const name = "asadullah";
const repCount = 50;

console.log("Hello my name is " + name + " and my rep count is " + repCount);
// Another way to write string 
console.log(`Hello my name is ${name} and my rep count is ${repCount}`)

const fullName = new String("AsadUllah Jamil")
console.log(fullName);
// strings method to use
console.log(fullName.length);
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.charAt(8))
console.log(fullName.includes("Jamil"))
console.log(fullName.indexOf("J"))
console.log(fullName.slice(4,12))
console.log(fullName.substring(4,12))
console.log(fullName.search("AsadUllah"))