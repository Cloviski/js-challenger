/*

Write a function that takes two arrays (a and b) as arguments.
Create an object that has properties with keys 'a' and corresponding values 'b'.
Return the object.

Test Cases:
myFunction(['a','b','c'],[1,2,3])        | Expected {a:1,b:2,c:3}
myFunction(['w','x','y','z'],[10,9,5,2]) | Expected {w:10,x:9,y:5,z:2}
myFunction([1,'b'],['a',2])              | Expected {1:'a',b:2}
*/

const createThreeObjects = (a, b) => {
  const result = {};
  a.forEach((key, index) => (result[key] = b[index]));
  return result;
};

// or

const createThreeObject = (a, b) =>
  a.reduce((obj, key, index) => ({ ...obj, [key]: b[index] }), {});
