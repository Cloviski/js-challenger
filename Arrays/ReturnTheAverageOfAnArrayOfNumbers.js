/*

Write a function that takes an array of numbers as argument.
It should return the average of the numbers.

Test Cases:
myFunction([10,100,40])    | Expected 50
myFunction([10,100,1000])  | Expected 370
myFunction([-50,0,50,200]) | Expected 50
*/

const arrayAverage = (arr) =>
  arr.reduce((accumulator, currentValue) => accumulator + currentValue) /
  arr.length;
