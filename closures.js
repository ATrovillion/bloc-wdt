// Create your own example of a closure and see if it works by using the console.log to print values and verifying they are what you expect.

function sayWhatAgain() {
    var say = function() { console.log(what); }
    //local variable what that ends up within the enclosure
    var what = "Say what again, I double dare you...";
    return say;
}
var sayWhatAgainClosure = sayWhatAgain();
sayWhatAgainClosure(); //"Say what again, I double dare you... 