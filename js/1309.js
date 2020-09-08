// Decrypt String from Alphabet to Integer Mapping

// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

// Examples:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// Input: s = "1326#"
// Output: "acz"

// Input: s = "25#"
// Output: "y"

// Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
// Output: "abcdefghijklmnopqrstuvwxyz"

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
     const CHAR_CODE_OFFSET = 96;
     let solStr = '';

     for (let i = 0; i < s.length; i++) {
          let currNumber = s[i];

          if (s[i + 2] === '#') {
               // for example 1, currNumber is now 10
               currNumber = s.slice(i, i + 2);
               i += 2;
          }

          // to get letter from currNumber, add to char code offset to get the char code and conver to string
          solStr += String.fromCharCode(parseInt(currNumber) + CHAR_CODE_OFFSET);
     }

     return solStr;
};