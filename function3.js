function getMilk(cost,amountPerBottle){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    
    console.log("Buy " + calcBottles(cost,amountPerBottle) + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveRight");
    console.log("moveRight");
    console.log("enterHouse");

    
    return calcChange(cost,amountPerBottle);
    
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount,costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Your change after bought a milk of bottles is:" + getMilk(10,3));