// Object Constructor
function Person(first, second, age, education) {
    this.first = first,
        this.second = second,
        this.age = age,
        this.education = education
    this.getFullName = function () {
        return this.first + " " + this.second;
    }
}

const person_1 = new Person("asadullah", "Jamil", 18, "Information technology")
const person_2 = new Person("Bilal", "Mujahid", 20, "BioTechnology");

// we can also add another property outside the object constructor
person_1.cityName = "sheikhupura";
console.log(person_1)
console.log(person_2)
console.log(person_1.getFullName());

// we can also write individual detail
console.log([person_1.first])

person_2.greet = function () {
    console.log("Hello welcome here!")
}
person_2.greet();