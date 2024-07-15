function bmiCalculator(weight, height){
    var calcBmi = (weight/ (height*height));
    return Math.round(calcBmi);
}

bmiCalculator(65,1.8);