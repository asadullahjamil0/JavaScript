// Exercise - 1
// const isEqualTo = (a,b) => a === 100 || b === 100 || a + b ===100;
//  console.log(isEqualTo(10,89));
//  console.log(isEqualTo(10,100));


// Exercise - 2
// const toGetExtension = (str) => str.slice(str.lastIndexOf("."));
// console.log(toGetExtension("script.js"));


// Exercise - 3
// Way - 1
// let str1 = prompt("write first word")
// let str2 = prompt("Write second word")
// console.log(str1.replace(str1,str2))
// Way - 2
// let text = "Hey i am asadullah";
// let result = text.replace("asadullah","Lion")
// console.log(result);

// Exercise - 4
// Way - 1
// const date = new Date();
// console.log(date);
// Way - 2
const formatDate = (date = new Date()) => {
    days = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    console.log(`${days}/${month}/${year}`)
}
formatDate();