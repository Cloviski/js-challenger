/*

Write a function that takes two strings (a and b) as arguments.
Create an object that has a property with key 'a' and a value of 'b'.
Return the object.

Test Cases:
myFunction('a','b') | Expected {a:'b'}
myFunction('z','x') | Expected {z:'x'}
myFunction('b','w') | Expected {b:'w'}
*/

const createTwoObjects = (a, b) => { [a]: b };
