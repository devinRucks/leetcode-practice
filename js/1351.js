// Count Negative Numbers in a Sorted Matrix

// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

// Examples:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Input: grid = [[3,2],[1,0]]
// Output: 0

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3

// Input: grid = [[-1]]
// Output: 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
     // filter will be applied to each row and will return an array of neg numbers.
     // it will then get the length of that array, and return it into the acc variable
     // it does this for each row in the grid
     return grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0)
};

console.log(countNegatives([[3, 2], [1, 0]]))