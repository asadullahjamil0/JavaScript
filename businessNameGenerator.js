let random1 = Math.floor(Math.random() * 3 + 1);
let random2 = Math.floor(Math.random() * 3 + 1);
let random3 = Math.floor(Math.random() * 3 + 1);

let first, second, third;

if (random1 === 1) {
    first = "Crazy";
}
else if (random1 === 2) {
    first = "Amazing";
}
else {
    first = "Fire";
}


if (random2 === 1) {
    second = "Foods";
}
else if (random2 === 2) {
    second = "Engine";
}
else {
    second = "Garments";
}


if (random3 === 1) {
    third = "Bros";
}
else if (random3 === 2) {
    third = "Limited";
}
else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);