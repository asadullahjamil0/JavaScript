var output = [];
var count = 1;

function fizzBuzz(start) {
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }

    else {
        output.push(count);
    }

    count++;

    console.log(output);
}

fizzBuzz();

// Additionaly we use a for loop but its not our today's topic

// var output = [];
// var count = 1;

// function fizzBuzz(start) {
//     for (let count = start; count <= 100; count++) {



//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("fizzBuzz");
//         }
//         else if (count % 3 === 0) {
//             output.push("Fizz");
//         }
//         else if (count % 5 === 0) {
//             output.push("Buzz");
//         }

//         else {
//             output.push(count);
//         }

//     }

//     console.log(output);
// }

// fizzBuzz(1);