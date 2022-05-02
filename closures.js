/*
 * CLOSURES
 * 
 * A closure is a function having access to the parent scope, even after the parent function has
 * closed.
 * An inner function has always access to the variables and parameters of its outer function
 * even after the outer function has returned.
 */

let scope = 'global scope';             // A global variable declaration
function checkscope() {
    let scope = 'local scope';          // A local variable declaration
    function f() { return scope; }      // Return the value in scope here
    return f();
}
checkscope();                           // => "local scope"

// The closure captures the local variable (and parameter) bindings of the outer function
// within which they are defined:
let scope1 = 'global scope';             // A global variable declaration
function checkscope1() {
    let scope1 = 'local scope';          // A local variable declaration
    function f1() { return scope1; }     // Return the value in scope here
    return f1;                           // In this case f1 is not invoked
}
let s = checkscope1()();                 // => "local scope"


// Example:
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
interviewQuestion('teacher')('John');       // => "What subject do you teach, John?"



// An important technique is when two closures are defined in the same scope and share access
// to the same private variable or variables.