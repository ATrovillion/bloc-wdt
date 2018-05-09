## QUESTIONS
>What are the three things you need to provide for a loop? I.e. for(a; b; c;), what are a, b, and c?
* a: You need to initilize the condition for the loop by giving a variable a value.
* b: You need to set the condition. If the condition is true, the loop will run. If the condition is false, the loop will not run.
* c: You need a final expression, which runs after each iteration of the loop. This changes something so that the loop eventually stops.

>Describe infinite loops and how to avoid them.
* An infinite loop occurs where the condition is always true. One example of this would be:
```
for (let i = 2; i >= 2; i++) {
    console.log(i);
}
```
* In this loop, the condition will always be true because it starts out as true (`i` is equal to 2), and will continue to be true no matter how often the loop runs.