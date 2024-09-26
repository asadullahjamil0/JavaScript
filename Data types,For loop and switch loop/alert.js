const score = 100;
const screoValue = 100.56;

const isLoggedIn = false;

if (isLoggedIn === false) {
    console.log("Hey i am false!");
}
else {
    console.log("Hey i am true");
}

// For Loop 
for (let i = 0; i < 7; i++) {
    console.log(i + 1);
}

const fruit = "Mango";
switch (fruit) {
    case "Banana":
        console.log("This is banana")
        break;

    case "Papayas":
        console.log("This is Papayas");
        break;

    case "Mango":
        console.log("This is Mango");
        break;

    default:
        console.log("This is not a fruit")
        break;
}
