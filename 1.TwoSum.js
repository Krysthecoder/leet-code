// Two Sum
// Link: https://leetcode.com/problems/two-sum/description/
// Difficulty: Easy
// My Difficulty: medium

//Solution:

var twoSum = function (nums, target) {
  let solution = [];
  for (let inx = 0; inx < nums.length - 1; inx++) {
    for (let subInx = 1; subInx < nums.length; subInx++) {
      if (nums[inx] + nums[subInx] === target && inx !== subInx) {
        solution.push(inx);
        solution.push(subInx);
      }
      if (solution.length == 2) {
        break;
      }
    }
    if (solution.length == 2) {
      break;
    }
  }

  return solution;
};
