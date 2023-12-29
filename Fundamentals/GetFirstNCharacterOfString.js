/*

Write a function that takes a string (a) as argument.
Get the first 3 characters of a. Return the result

Test Cases:
myFunction('abcdefg') | Expected 'abc'
myFunction('1234')    | Expected '123'
myFunction('fgedcba') | Expected 'fge'

*/

const getFirstThree = (a) => a.slice(0, 3);
