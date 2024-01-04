/*

Write a function that takes an array as argument.
It should return true if all elements in the array are equal.
It should return false otherwise.

Test Cases:
myFunction([true, true, true, true]) | Expected true 
myFunction(['test', 'test', 'test']) | Expected true 
myFunction([1,1,1,2])                | Expected false 
myFunction(['10',10,10,10])          | Expected false 

*/

const equalArray = (arr) =>
  arr.reduce((accumulator, currentValue) => currentValue === arr[0], true);

// or

const equalArr = (arr) => new Set(arr).size === 1

// or 

const equalArra = (arr) => arr.every((element) => element === arr[0])
  


