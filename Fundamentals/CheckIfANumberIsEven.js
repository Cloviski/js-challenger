/*

Write a function that takes a number as argument.
If the number is even, return true. Otherwise, return false

Test Cases:
myFunction(10)   | Expected true
myFunction(-4)   | Expected true
myFunction(5)    | Expected false
myFunction(-111) | Expected false

*/

const evenNumber = (a) => (a % 2 == 0 ? true : false);
