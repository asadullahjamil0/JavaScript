
function twoSum(num, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if ((num[i] + num[j]) === target) {
                return [i, j];
            }
        }
    }
    return [];
}

let target = 9;
let nums = [2, 1, 7, 11];
console.log(twoSum(nums, target));