/* Using the numbers provided in the editor, use filter() function to remove any numbers that are less than four
 then use reduce() function to sum the remaining numbers. */
var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];

var total = numbers
    .filter(item => item >= 4)
    .reduce((total, item) => total + item);
console.log(total);

