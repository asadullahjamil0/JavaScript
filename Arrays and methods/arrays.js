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

