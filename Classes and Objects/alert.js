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