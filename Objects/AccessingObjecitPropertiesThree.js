/*

Write a function that takes an object with two properties and a string as arguments.
It should return the value of the property with key equal to the value of the string

Test Cases:
myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')  | Expected 'Asia'
myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') | Expected 'Sweden'
*/

const accessKey = (obj, key) => obj[key];