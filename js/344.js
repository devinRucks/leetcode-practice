// REVERSE STRING

// Write a function that reverses a string. 
// The input string is given as an array of characters char[].
// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// Examples
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
     let left = 0;
     let right = s.length - 1;

     while (left < right) {
          let temp = s[left];
          s[left] = s[right]
          s[right] = temp;
          left += 1;
          right -= 1;
     }
};