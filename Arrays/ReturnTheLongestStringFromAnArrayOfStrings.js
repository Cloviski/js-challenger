/*

Write a function that takes an array of strings as argument.
Return the longest string.

Test Cases:
myFunction(['help', 'me'])         | Expected 'help'
myFunction(['I', 'need', 'candy']) | Expected 'candy'

*/

const longestString = (arr) =>
  arr.reduce((currentLongest, currentString) =>
    currentLongest.length > currentString.length ? currentLongest : currentString
  );
