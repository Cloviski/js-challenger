/*

Write a function that takes a string (a) as argument.
Remove the last 3 characters of a. Return the result

Test Cases:
myFunction('abcdefg') | Expected 'abcd'
myFunction('1234')    | Expected '1'
myFunction('fgedcba') | Expected 'fged'

*/

const removeLastThree = (a) => a.slice(0, -3);