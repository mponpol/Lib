/*
 * ARRAY METHODS
 */

 // ARRAY ITERATOR METHODS
    // forEach()
    // Iterates through an array, invoking a function you specify for each element.
 let data = [1, 2, 3, 4, 5], sum = 0;
 data.forEach(value => { sum += value; });          // sum == 15

    // **** map() ****
    // Passes each element of the array on which it is invoked to the function you specify and returns an array containing the values returned by your function
let a = [1, 2, 3];
a.map(x => x*x)                                     // => [1, 4, 9]

    // **** filter() ****
    // returns an array containing a subset of the elements of the array on which it is invoked. The function you pass to it should be predicate: a function that returns true or false.
let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3)                            // => [2, 1]; values less than 3
a.filter((x, i) => i%2 === 0)                   // => [5, 3, 1]; every odd value

    // **** find() / findIndex() ****
    // Like filter(), they iterate through your array looking for elements for which your predicate function returns a truthy value, but stops iterating the first time the predicate finds an element.
let a = [1, 2, 3, 4, 5];
a.findIndex(x => x === 3)                       // => 2: the value 3 appears at index 2
a.findIndex(x => x < 0)                         // => -1: no negative numbers in the array
a.find(x => x % 5 === 0)                        // => 5: this is a multiple of 5
a.find(x => x % 7 === 0)                        // => undefined: no multiples of 7 in the array

    // **** every() / some() ****
    // They are array predicates: they apply a predicate function you specify to the elements of the array, then return true or false.
let a = [1, 2, 3, 4, 5];
a.every(x => x < 10)                        // => true: all values are < 10
a.every(x => x % 2 === 0)                   // => false: not all values are even
a.some(x => x % 2 === 0)                    // => true: a has some even numbers
a.some(isNaN)                               // => false: a has no non-numbers

    // **** reduce() / reduceRight() ****
    // Combine the elements of an array, using the function you specify, to produce a single value. It takes two arguments: the first is the function that performs the reduction operation, and the second (optional) is an initial value to pass to the function.  reduceRight() works just like reduce(), except that it processes the array from highest index to lowest (right-to-left),
let a = [1, 2, 3, 4, 5];
a.reduce((x, y) => x + y, 0)                // => 15: the sum of the values
a.reduce((x, y) => x * y, 1)                // = 120: the product of the values


// FLATTENING ARRAYS with flat() and flatMap()
// Creates and returns a new array that contains the same elements as the array it is called on, except that any elements that are themselves arrays are “flattened” into the returned array. When called with no arguments, flat() flattens one level of nesting. If you want to flatten more levels, pass a number to flat()
[1, [2, 3]].flat()                          // => [1, 2, 3]
[1, [2, [3]]].flat()                        // => [1, 2, [3]]

let a = [1, [2, [3, [4]]]];
a.flat(1)                                   // => [1, 2, [3, [4]]]
a.flat(2)                                   // => [1, 2, 3, [4]]
a.flat(3)                                   // => [1, 2, 3, 4]
a.flat(4)                                   // => [1, 2, 3, 4]

// Calling a.flatMap(f) is the same as (but more efficient than) a.map(f).flat()
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words                                // => ["hello", "world", "the", "definitive", "guide"];


// ADDING ARAYS with concat()
let a = [1,2,3];
a.concat(4, 5)              // => [1,2,3,4,5]
a.concat([4,5],[6,7])       // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]])      // => [1,2,3,4,5,[6,7]]; but not nested arrays
a                           // => [1,2,3]; the original array is unmodified


// STACKS and QUEUES with push(), pop(), shift(), and unshift()
// The push() method appends one or more new elements to the end of an array and returns the new length of the array (it does not flatten array arguments)
// The pop() method does the reverse: it deletes the last element of an array, decrements the array length, and returns the value that it removed
let stack = [];         // stack == []
stack.push(1,2);        // stack == [1,2];
stack.pop();            // stack == [1]; returns 2
stack.push(3);          // stack == [1,3]
stack.pop();            // stack == [1]; returns 3
stack.push([4,5]);      // stack == [1,[4,5]]
stack.pop()             // stack == [1]; returns [4,5]
stack.pop();            // stack == []; returns 1

// The unshift() method adds an element/elements to the beginning of the array, shifts the existing array elements up to higher indexes, and returns the new length of the array
// The shift() method removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array.
let q = [];         // q == []
q.push(1,2);        // q == [1, 2]
q.shift();          // q == [2]; returns 1
q.push(3)           // q == [2, 3]
q.unshift(1)        // q == [1, 2, 3]; returns 3 (new length of the array)


// SUBARRAYS with slice(), splice(), fill(), and copyWithin()
    // The slice() method returns a slice, or subarray, of the specified array. Its two arguments specify the start and end of the slice to be returned. The returned array contains the element specified by the first argument and all subsequent elements up to, but not including, the element specified by the second argument.
