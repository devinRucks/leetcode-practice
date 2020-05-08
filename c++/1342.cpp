#include <stdio.h>
#include <iostream>
using namespace std;

// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

int numberOfSteps(int num)
{
     int count;

     for (int i = 0; num != 0; i++)
     {
          count += 1;
          (num % 2) == 0 ? num /= 2 : num -= 1;
     }
     return count;
}

int main()
{
     int result = numberOfSteps(14);

     cout << result;

     return 0;
}