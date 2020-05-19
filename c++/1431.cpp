#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

// KIDS WITH THE GREATEST NUMBER OF CANDIES

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
// Notice that multiple kids can have the greatest number of candies.

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

class Solution
{
public:
     vector<bool> kidsWithCandies(vector<int> &candies, int extraCandies)
     {
          int size = candies.size();
          vector<bool> result(size, false);
          int greatestNum = candies[0];

          // find greatest number
          for (int i = 0; i < candies.size(); i++)
          {
               if (candies[i] > greatestNum)
               {
                    greatestNum = candies[i];
               }
          }

          for (int i = 0; i < candies.size(); i++)
          {
               candies[i] += extraCandies;
               (candies[i] >= greatestNum) ? result[i] = true : result[i] = false;
          }

          return result;
     }
};