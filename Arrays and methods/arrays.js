let fictionalCharacter = ["ironman", "thor", "batman", "spiderman", "hulk"]
console.log(fictionalCharacter.length)
console.log(fictionalCharacter);
console.log(fictionalCharacter.reverse());

// we can also add or remove element from an array
fictionalCharacter.push("volverine");
console.log(fictionalCharacter);
fictionalCharacter.pop();

// we can also convert an array to string 
console.log("In the form of string > " + fictionalCharacter.toString());

let marks = [87, 98, 65, 45, 87, 96]
console.log(marks[1])
// we can also change the value of arrays indices 
marks[1] = 100;
for (let i = 0; i < fictionalCharacter.length; i++) {
    console.log("item no: " + (i + 1) + " " + fictionalCharacter[i])
}

let layMen = ["Charles", "John", "mark"]
layMen.unshift("David")
layMen.shift();
const concatArray = fictionalCharacter.concat(layMen);
console.log(concatArray);

// Slice and splice method
// slice method is used to get specific part of an array
console.log(marks.slice(1, 3));

// splice method is used to change the original array
marks.splice(2, 3, 77, 54, 69);
console.log(marks);

// Its a practise question at the end of the topic
let companyName = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companyName.shift();
console.log(companyName);
companyName.splice(1, 1, "Ola");
console.log(companyName);
companyName.push("Amazon");
console.log(companyName);