// let obj = {
//     a: 12,
//     b: "AsadUllah",
// }
// console.log(obj)

// let Animal = {
//     eat: true,
// };
// let Rabbit = {
//     jump: true,
// };

// Rabbit.__proto__ = Animal;

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created..");
    }
    eats() {
        console.log("I am eating")
    }
    jumps() {
        console.log("I am jumping")
    }

}

class lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Object is created and he is a lion...");
    }
    eats() {
        super.eats();
        console.log("he is eating and he is a lion")
    }

}
let a = new Animal("Bunny");
console.log(a);

let l = new lion("Shera")
console.log(l);