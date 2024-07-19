// Exercise - Method-1

var count = 99;



while (count >= 1) {
    var bottleWord = " bottles";
    if (count == 1) {
        bottleWord = " bottle";
    }
    
    console.log(count + bottleWord + " of beer on the wall, " + count + bottleWord + " of beer.");
    count--;
    console.log("Take one down and pass it around, " + (count - 1) + bottleWord + " of beer on the wall.")
    
}


// Exercise - Method-2

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }