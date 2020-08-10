// MONOTONIC ARRAY

// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  
// An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.

// Examples:
// Input: [1,2,2,3]
// Output: true

// Input: [6,5,4,4]
// Output: true

// Input: [1,3,2]
// Output: false

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
     let increasing = true;
     let decreasing = true;

     for (let i = 0; i < A.length - 1; i++) {
          if (A[i] > A[i + 1])
               increasing = false;
          if (A[i] < A[i + 1])
               decreasing = false;
     }

     return increasing || decreasing;
};