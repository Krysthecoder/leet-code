// Title: Palindrome Number
// Link: https://leetcode.com/problems/palindrome-number/description/
// Difficulty: Easy
// My Difficulty: Easy

var isPalindrome = function(x) {
  return x == x.toString().split('').reverse().join('') ? true : false
};
