/*

Write a function that takes an object (a) as argument.
Return the sum of all object values.

Test Cases:
myFunction({a:1,b:2,c:3})     | Expected 6
myFunction({j:9,i:2,x:3,z:4}) | Expected 18
myFunction({w:15,x:22,y:13})  | Expected 50

*/

const sumObjectValues = (a) => Object.values(a).reduce((acc, cur) => acc + cur);
