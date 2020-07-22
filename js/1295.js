// Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [12,345,2,6,7896]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {

     let evenNumDigits = 0;
     for (let i = 0; i < nums.length; i++) {
          let numToString = nums[i].toString()
          if ((numToString.length % 2) == 0) {
               evenNumDigits += 1;
          }
     }
     return evenNumDigits;

};