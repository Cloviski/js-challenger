/* 

Write a function that takes a string (a) and a number (n) as argument.
Return the nth character of 'a'.

Test Cases:
myFunction('abcd',1)    | Expected: 'a'
myFunction('zyxbwpl',5) | Expected: 'w'
myFunction('gfedcba',3) | Expected: 'e'

*/

const getNth = (a, n) => a.charAt(n - 1);
// or
// const getNth = (a, n) => a[n - 1];
// this is called square bracket notation for index
