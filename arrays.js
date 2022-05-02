/*
 * ARRAYS
 * 
 * An array is an ordered collection of values, its elements, and each value has a numeric
 * position in the array, its index. Arrays are zero-based (the index of the first element 0).
 * Every JavaScript array has a length property.
 * Arrays inherit properties from Array.prototype, which defines a rich set of array
 * manipulation methods.
 */


/*
 * CREATING ARRAYS
 */
 // Array literals
let empty = [];                     // An array with no elements
let primes = [1, 3, 5, 7, 11];      // An array with 5 numeric elements
let misc = [ 1.1, true, 'a', ];     // 3 elements of various types + trailing comma

let base = 1024;
let table = [base, base+1, base+3, base+4];

let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

let count = [1, , 3];               // Elements at indexes 0 and 2. No element at index 1
let undefs = [ , , ];               // An array with no elements but a length of 2

// Spread operator
let a = [1, 2, 3];
let b = [0, ...a, 4];               // b == [0, 1, 2, 3, 4]

let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0;                        // Modifying the copy does not change the original
original[0]                         // => 1

let digits = [...'0123456789'];     // As strings are iterable you can turn any string into array
digits                              // => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array constructor
let a = new Array();                // Creates an empty array with no elements

let a = new Array(10);              // Creates an array with the specified length

let a = new Array(5, 4, 3, 2, 1, "testing");

// Array.of
Array.of()                          // => []; returns empty array with no arguments
Array.of(10)                        // => [10]; can create arrays with single numeric argument
Array.of(1, 2, 3)                   // => [1, 2, 3]

// Array.from
let copy = Array.from(original);    // is important because it defines a way to make a true-array
                                    // copy of an array-like object


/*
 * READING AND WRITING ARRAY ELEMENTS
 */
// You access an element of an array using the [] operator. A reference to the array should
// appear to the left of the brackets.
let value = a[0];                   // Read element 0
a[1] = 3.14                         // Write element 1

/*
 * ARRAY LENGTH
 */

[].length                           // => 0: the array has no elements
['a', 'b', 'c'].length              // => 3: highest index is 2, length is 3

a = [1, 2, 3, 4, 5];                // Start with a 5-element array
a.length = 3;                       // a is now [1, 2, 3]
a.length = 0;                       // Delete all elements. a is []
a.length = 5;                       // Length is 5, but no elements, like new Array(5)


/*
 * ADDING AND DELETING ARRAY ELEMENTS
 */
let a = [];                         // Start with an empty array
a.[0] = 'zero';                     // And add elements to it

// push() method: add one or more values to the end of an array
let a = [];                         // Start with an empty array
a.push('zero');                     // Add a value at the end. a = ['zero']
a.push('one', 'two');               // Add two more values. a = ['zero', 'one', 'two']

// pop() method: removes the last element of the array and returns it
let a = [1, 2, 3];
a.pop();                            // a = [1, 2]; returns 3


/*
 * ITERATING ARRAYS
 */
// for/of loop
let letters = [...'Hello world'];   // An array of letters
let string = '';
for (let letter of letters) {
    string += letter;
}
string                              // => 'Hello world'; we reassembled the original text

// forEach(): passing a function to this method invokes your function once on each element
let uppercase = '';
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
});
uppercase                           // => 'HELLO WORLD'


/*
 * MULTIDIMENSIONAL ARRAYS
 */
let table = new Array(10);          // Create a new array with the 10 rows of the table
for(let i=0; i < table.length; i++) {
    table[i] = new Array(10);       // Each row has 10 columns
}

for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}

table[5][7]                         // => 35