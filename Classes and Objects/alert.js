// Objects in JS

// const student = {
//     name: "asad",
//     marks: 78.4,
//     printMarks: function () {
//         console.log("Your marks = " + this.marks)
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("This is about salary!");
//     }
// }

// const asadUllah = {
//     salary: 50000,
// }

// asadUllah.__proto__ = employee;
// Important note if object and prototype have same method object's method will be used

class car {
    start() {
        console.log("Start!")
    }

    stop() {
        console.log("Stop!")
    }

    brandName(brand) {
        this.brand = brand;
        console.log("Brand Name is " + brand)
    }
}

let fortuner = new car();
fortuner.brandName(23);
let toyota = new car();

// objects in an array
let cars = [
    { Name: "Bilal", Age: 22, School: "Leads School", teacherName: "Jhangir", email: "jhangir@189gmail.com" },
    { Name: "Hassan", Age: 23, School: "National School", teacherName: "Mehtab", email: "mehtab23@gmail.com" },
    { Name: "Arslan", Age: 22, School: "Wisdom House School", teacherName: "Khalid", email: "khalid567@gmail.com" },
    { Name: "Moiz", Age: 21, School: "National School", teacherName: "Mehmood", email: "mehmood54@gmail.com" },
    { Name: "Hamza", Age: 23, School: "Wisdom House School", teacherName: "Mehtab", email: "mehtab23@gmail.com" },
    { Name: "Awais", Age: 22, School: "Leads School", teacherName: "Khalid", email: "khalid567@gmail.com" },
    { Name: "Nouman", Age: 21, School: "Wisdom House School", teacherName: "Jhangir", email: "jhangir@189gmail.com" },
    { Name: "Ihtisham", Age: 21, School: "National School", teacherName: "Mehmood", email: "mehmood54@gmail.com" },
    { Name: "Husnain", Age: 23, School: "Leads School", teacherName: "Khalid", email: "khalid567@gmail.com" },
    { Name: "Umer", Age: 22, School: "Wisdom House School", teacherName: "Jhangir", email: "jhangir@189gmail.com" },
];
// filter method to filter someting from an array
const filterTeacher = cars.filter((word) => {
    return word.teacherName && word.email;
})
console.log(cars);
for (let i = 0; i < cars.length; i++) {
    console.log(filterTeacher[i].teacherName);
}
console.log(filterTeacher);