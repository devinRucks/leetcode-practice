// Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Examples:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Input: n = 3
// Output: [-1,0,1]

// Input: n = 1
// Output: [0]

/**
 * Given array of length n:
 * Given x as the smallest element
 * nx + 0 + 1 + ... + n - 1 = 0
 * nx = -(summation of elements from 1 to n-1)
 * x = -(summation of elements from 1 to n-1) / n
 * Finally you can fill up the array with [x, x + 1, x + 2, ..., x + n-1]
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
     const summation = -sumFromZero(n);
     const ans = [];
     const x = summation / n;
     for (let i = 0; i < n; ++i) {
          ans.push(x + i)
     }
     return ans;
};

const sumFromZero = n => {
     if (n === 1) return 0;
     return n - 1 + sumFromZero(n - 1);
}