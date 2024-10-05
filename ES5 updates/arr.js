let arr = [2, 14, 76, 13, 45, 19, 22, 26]

const checkCond = ((value) => {
    return value === 19;
})
document.write(arr.findIndex(checkCond) + `<br> </br>`);

// finding prime number by findIndex method.
function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false
    }
    for (let i = 3; i < Math.sqrt(element); i += 2) {
        if (element % i === 0) {
            return false;
        }
    }
    return true;
}

document.write([1, 2, 4, 5, 6, 8, 9].findIndex(isPrime));