// var searchInsert = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (right >= left) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         }
//         else if (nums[mid] > target) {
//             right = mid - 1;
//         }
//         else {
//             left = mid + 1;
//         }
//     }
//     return left;
// };

// let nums = [1, 3, 5, 6];
// let target = 2;
// console.log(searchInsert(nums, target));

//Another way to solve this problem
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length; // If target is greater than all elements
};

let nums = [1, 3, 5, 6];
let target = 4;
console.log(searchInsert(nums, target));

