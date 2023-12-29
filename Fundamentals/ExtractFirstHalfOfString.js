/* 

Write a function that takes a string (a) as argument.
Extract the first half a. Return the result

Test Cases:
myFunction('abcdefgh') | Expected 'abcd'
myFunction('1234')     | Expected '12'
myFunction('gedcba')   | Expected 'ged'


*/

const firstHalfString = (a) => a.slice(0, a.length / 2);
