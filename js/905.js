// SORT ARRAY BY PARITY

// Given an array A of non-negative integers, return an array consisting 
// of all the even elements of A, followed by all the odd elements of A.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
     // unshift adds to beginning of array
     // push add to the end of the array
     let result = [];

     for (const el of A) {
          // if even
          if (el % 2 === 0) {
               result.unshift(el)
          } else {
               result.push(el)
          }
     }
     return result;
};