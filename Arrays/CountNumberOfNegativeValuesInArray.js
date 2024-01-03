/*

Write a function that takes an array of numbers as argument.
Return the number of negative values in the array.

Test Cases:
myFunction([1,-2,2,-4])  | Expected 2
myFunction([0,9,1])      | Expected 0
myFunction([4,-3,2,1,0]) | Expected 1

*/

const countNegative = (a) => a.filter((number) => number < 0).length;

