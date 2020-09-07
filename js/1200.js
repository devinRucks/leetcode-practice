// Minimum Absolute Difference

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Examples:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
     let minDistance = Infinity;
     let result = [];

     // sort O(nlgn)
     arr.sort((a, b) => a - b)

     // calculate min distance O(n)
     for (let i = 0; i < arr.length - 1; i++) {
          let thisDistance = arr[i + 1] - arr[i]

          if (thisDistance < minDistance) {
               minDistance = thisDistance
          }
     }

     // test if within min distance, if so add pair to result O(n)
     for (let i = 0; i < arr.length - 1; i++) {
          let thisDistance = arr[i + 1] - arr[i]

          if (thisDistance === minDistance) {
               result.push([arr[i], arr[i + 1]])
          }
     }

     return result;
};