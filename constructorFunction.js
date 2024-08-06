function HouseKeeper(name, age, workExperience, cleaningReportoire) {
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.cleaningReportoire = cleaningReportoire;
}

var houseKeeper1 = new HouseKeeper("Angela", 24, 6, ["Bathroom", "bed", "drawing room"])
console.log("My name is " + houseKeeper1.name + " and my age is " + houseKeeper1.age);