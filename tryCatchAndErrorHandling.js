// let a = prompt("Enter first number")
// let b = prompt("Enter second number")

// let sum = parseInt(a) + parseInt(b)

// if (sum === 100 || a === 100 || b === 100) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }


// If user put input against data type / Error handling
let a = prompt("Enter first number")
let b = prompt("Enter second number")

let sum = parseInt(a) + parseInt(b)

if (isNaN(a) || isNaN(b) || isNaN(sum)) {
    throw SyntaxError("Sorry not allowed")
}


// Try-catch method to catch error
// try {
//     console.log("Sum is:", sum * x)
// } catch (error) {
//     console.log("Error detected")
//     // To find some information about error
//     // alert(error.name);
//     alert(error.message);
//     alert(error.stack);
// }


// Finally method use if we want to get our result at any cost
let x = 1;
function main() {
    try {
        console.log("Sum is:", sum * x)
        return true;
    } catch (error) {
        console.log("Error detected")
        return false;
    }
    finally {
        console.log("Files are closed and db connection is closed")
    }
}

let c = main();