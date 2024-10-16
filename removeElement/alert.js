// To get array we can use this code 
// var removeElement = function (nums, val) {
//     let index = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             index.push(nums[i]);
//         }
//     }
//     return index;
// };

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// let val = 2;
// console.log(removeElement(nums, val));

//But if we want to get length of the new array
var removeElement = function (nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            index[i] = nums[i];
            index++;
        }
    }
    return index;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(nums, val));