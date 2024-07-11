// 1-Create a variable that store information from user
var myName = prompt("What your name: ");
// 2-Captalise the first letter of word
var name = myName.slice(0,1).toUpperCase();
// 3-We use the Captalised version of their name to greet them using an alert
alert("Hello, "+name + myName.slice(1,myName.length).toLocaleLowerCase());