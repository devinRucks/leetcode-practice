#include <iostream>
#include <stdio.h>
using namespace std;

// DEFANGING AN IP ADDRESS

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]"

string defangIPaddr(string address)
{
     string res = "";

     for (int i = 0; i < address.size(); i++)
     {
          if (address[i] == '.')
               res += "[.]";
          else
               res += address[i];
     }

     return res;
}

int main()
{
     string newIP = defangIPaddr("1.1.1.1");
     cout << newIP;
     return 0;
}