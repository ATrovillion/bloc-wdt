// Create a recursive function that will take a positive integer parameter "n" and return the factorial of n.
//n! = n x (n-1)!
var n = prompt("What number do you want to find the factorial of?");

var factorial = function(n) {
    if (n < 0) {
        return (n + " is not a non-negative integer; try something else.");
    } else if (n == 0) {
        return 1;
    }
    else {
        return (n * factorial(n-1));
    }
}

console.log(n + "! is " + factorial(n));