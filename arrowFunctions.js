/*
 * ARROW FUNCTIONS
 *
 * You can define functions using a particularly compact syntax:
 *      - uses an => "arrow" to separate the function parameters from the function body.
 *      - the function keyword is not used.
 *      - there is no need for a function name (since they are expressions instead of statements)
 */

const sum = (x, y) => { return x + y; };

// If the body of the function is a single return statement, you can omit the return keyword,
// the semicolon that goes with it, and the curly braces, and write the body of the function as
// the expression whose value is to be returned
const sum1 = (x1, y1) => x1 + y1;


// Arrow functions differ from functions defined in other ways in one critical way: they inherit
// the value of the 'this' keyword from the environment in which they are defined rather than
// defining their own invocation context as functions defined in other ways do.
// Arrow functions also differ from other functions in that they do not have a prototype
// property, which means that they cannot be used as constructor functions for new classes.