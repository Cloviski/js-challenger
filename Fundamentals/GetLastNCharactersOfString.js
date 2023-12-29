/* 

Write a function that takes a string as argument.
Extract the last 3 characters from the string. Return the result

Test Cases:
myFunction('abcdefg') | Expected 'efg'
myFunction('1234')    | Expected '234'
myFunction('fgedcba') | Expected 'cba'

*/

const extractLastThree = (str) => str.slice(-3);
