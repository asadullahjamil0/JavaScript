function HouseKeeper (name,age,workExperience,cleaningReportoire){
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.cleaningReportoire = cleaningReportoire;
    this.cleanHouse = function(){
        alert("Cleaning house progress.Please wait for some time")
    }
}

var houseKeeper1 = new HouseKeeper("Angela",24,6,["Bathroom","bed","drawing room"])
houseKeeper1.cleanHouse();