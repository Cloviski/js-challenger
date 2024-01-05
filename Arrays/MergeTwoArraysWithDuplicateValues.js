/*

Write a function that takes two arrays as arguments.
Merge both arrays and remove duplicate values.
Sort the merge result in ascending order. Return the resulting array

Test Cases:
myFunction([1, 2, 3], [3, 4, 5])                     | Expected [ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) | Expected [ -11, -10, 5, 22, 41,  42, 333]
*/

const mergeArrayDuplicatedValues = (a, b) =>
  a
    .concat(b)
    .sort((x, y) => x - y)
    .filter((element, index, array) => array.indexOf(element) === index);

    //sort determs if the method is ascending or descending by negative and positive results
