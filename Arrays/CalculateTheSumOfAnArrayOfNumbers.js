/*

Write a function that takes an array of numbers as argument.
It should return the sum of the numbers.

Test Cases:
myFunction([10,100,40])     | Expected 150
myFunction([10,100,1000,1]) | Expected 1111
myFunction([-50,0,50,200])  | Expected 200

*/

const calculateArraySum = (a) =>
  a.reduce((accumulator, currentValue) => accumulator + currentValue);
