/*ES6: Explore Differences Between the var and let Keywords*/
//If you were to replace var with let in the variable declarations of the code above, the result would be an error.
let camper = 'James';
let camper = 'David'; // throws an error

let catName;
let quote;

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();

/*ES6: Compare Scopes of the var and let Keywords*/
//When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
//Example:
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

//--Problem
var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());
// returns 3

//--Classic solution: Closures
//Since there is no block scope in JavaScript - only function scope - by wrapping the function creation in a new function, you ensure that the value of "i" remains as you intended.
var printNumTwo;
var createFunc = function (i) {
    return function () {
        return i;
    }
};
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = createFunc(i);
    }
}
console.log(printNumTwo());
// returns 2

//--Classic solution: Closures with Self-invoking function
// Using Self-invoking function to keep i into function scope
var printNumTwo;

for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = (function (i) {
            return function () {
                return i;
            }
        })(i);
    }
}
console.log(printNumTwo());
// returns 2

//--ES6 solution: let
//In a loop with a let-based index, each iteration through the loop will have a new value of i where each value is scoped inside the loop, so your code would work as you expect. 
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

/*ES6: Declare a Read-Only Variable with the const Keyword*/
//const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
//A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

/*ES6: Mutate an Array Declared with const*/
//It is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

/*ES6: Prevent Object Mutation*/
//As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
//Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}

