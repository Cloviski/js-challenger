/*

Write a function that takes an array of numbers as argument.
It should return an array with the numbers sorted in descending order.

Test Cases:
myFunction([1,3,2])   | Expected [3,2,1]
myFunction([4,2,3,1]) | Expected [4,3,2,1]

*/

const sortDescending = (arr) => arr.sort().reverse();