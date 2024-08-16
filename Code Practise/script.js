let students = ["Shahzad", "Ghias", "Naeem", "SameeUllah", "Mujahid", "Haris", "Zaid", "Abdulrehman", "MateeUllah", "JanMuhammad"];
let houses = [];
for (const student of students) {
    if (student.length < 5) {
        houses.push("Al-Khair")
    }
    else if (student.length < 7) {
        houses.push("Bukhari");

    }
    else if (student.length < 10) {
        houses.push("Paradise");
    }
    else {
        houses.push("Serena")
    }
}
console.log(houses);