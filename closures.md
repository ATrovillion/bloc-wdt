>What does "lexical scope" mean in JavaScript?
* Lexical scope refers to the convention in programming by which the functional range of a variable may only be referenced from within the block of code where it is defined.

>What is an advantage of a programming language that uses lexical scoping?
* Languages that use lexical scoping are more predictable than languages that use dynamic scope. In those languages that use lexical scoping, programs can reliably be read and variable scope and access can be mapped.

>What is a closure?
* A closure is when a function can remember and access its lexical scope even when that funtion is executing outside its lexical scope. That is, the lexical scope of the variable is able to be transferred/used/remembered outside the internal scope of the function.
* Closures are child functions nested within parent functions, but having access to the parent scope, even after the parent function has closed.

>What would be a use case of a closure?
* Closures allow for nesting of functions, while at the same time giving the inner function full access to all the variables and functions defined inside the outer function (along with all the variables and functions to which the outer function has access.)