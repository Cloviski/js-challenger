/*

Write a function that takes an object (a) and a string (b) as argument.
Return true if the object has a property with key 'b'.
Return false otherwise. 
Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

Test Cases:
myFunction({a:1,b:2,c:3},'b')             | Expected true
myFunction({x:'a',y:'b',z:'c'},'a')       | Expected false
myFunction({x:'a',y:'b',z:undefined},'z') | Expected true
*/

const checkProp = (a, b) => b in a;
