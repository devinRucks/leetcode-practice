// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

var numIdenticalPairs = function (nums) {
     sortedNums = [];
     sortedNums = nums.sort((a, b) => a - b);
     let output = 0;

     for (let i = 0; i < sortedNums.length - 1; i++) {

          for (let j = (i + 1); j < sortedNums.length; j++) {
               if (sortedNums[i] == sortedNums[j]) {
                    output += 1;
               } else {
                    break;
               }
          }
     }
     return output;
};