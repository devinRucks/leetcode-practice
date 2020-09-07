// Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
// and replace the last element with -1.

// After doing so, return the array.

// Examples:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {

     // result = [ , , , , , -1]
     const result = new Array(arr.length);
     result[arr.length - 1] = -1;

     for (let i = arr.length - 1; i > 0; i--) {
          // console.log(`arr[i]: ${arr[i]}, result[i]: ${result[i]}`)
          result[i - 1] = Math.max(arr[i], result[i])
          // console.log(result[i - 1])
     }

     return result;
};


console.log(replaceElements([17, 18, 5, 4, 6, 1]))