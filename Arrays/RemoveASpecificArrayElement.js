/*

Write a function that takes an array (a) and a value (b) as argument.
The function should remove all elements equal to 'b' from the array.
Return the filtered array.

Test Cases:
myFunction([1,2,3], 2)           | Expected [1, 3]
myFunction([1,2,'2'], '2')       | Expected[1, 2]
myFunction([false,'2',1], false) | Expected ['2', 1]
myFunction([1,2,'2',1], 1)       | Expected [2, '2']

*/

const removeElement = (a, b) => a.filter((element) => element !== b);