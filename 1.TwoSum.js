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

/// solution grabbed from other ppl

var twoSum = function (nums, target) {
  let map = {};
  for (let inx = 0; inx < nums.length; inx++) {
    let num = nums[inx]; //1 first iteration will be 2 // second iteration will be 7
    if (target - num in map) {
      //2 target (9) - num (2) equal (7) IN (boolean) map will get false as there is no '7' key in obj map
      //4 target (9) - num (7) equal (2) IN (boolean) map will get true as there is '2' as key in obj map
      return [map[target - num], inx]; //5 will return [map[targe(9) - num(7)](key "2 " with value of 0), inx(1)] => return [0,1]
    }
    map[num] = inx; //3 this will assign the index of num(2) into the map being map{2: 0}
  }
};

twoSum([2, 7, 11, 15], 9); // solution should be [0,1]
twoSum([3, 2, 4], 6); // solution should be [1,2]
