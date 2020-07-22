// Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
     let digits = n.toString().split('');
     let realDigits = digits.map(Number)
     let product = 0;
     let sum = 0;

     for (let i = 0; i < realDigits.length; i++) {
          (i == 0) ? product += realDigits[i] : product *= realDigits[i];
          sum += realDigits[i];
     }
     let result = (product - sum);
     return result;
};