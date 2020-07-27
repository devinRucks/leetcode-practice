// SHUFFLE STRING

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
     const sMap = {};
     let result = '';
     let sorted = true;
     const STRINGSIZE = s.length;

     // check to see if array elements are in order. If they are, return string.
     for (let i = 0; i < STRINGSIZE; i++) {
          if (indices[i] >= indices[i + 1])
               sorted = false;
     }

     if (sorted)
          return s;
     else {
          for (let i = 0; i < STRINGSIZE; i++) {
               sMap[indices[i]] = s[i];
          }

          Object.values(sMap).forEach(el => result += el)
     }

     return result;
};