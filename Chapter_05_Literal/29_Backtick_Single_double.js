// ==========================================
// Backtick vs Single vs Double Quotes
// File: 29_Backtick_Single_double.js
// ==========================================

/*
  SINGLE ('') and DOUBLE ("") quotes are identical in JavaScript.
  Both create plain strings with no special features.

  BACKTICKS (``) create "template literals" which allow:
    1. String interpolation: ${variable}
    2. Multi-line strings without \n
    3. Expression evaluation inside ${}

  Rule of thumb:
    - Use backticks when you need variables or multi-line text.
    - Use single/double quotes for simple, static strings.
*/

let name = "Alice";
let age = 25;

// Single & Double quotes: plain strings only
let single = 'Hello, I am ' + name + '. I am ' + age + ' years old.';
let double = "Hello, I am " + name + ". I am " + age + " years old.";

// Backtick: supports interpolation and multi-line
let backtick = `Hello, I am ${name}.
I am ${age} years old.
Next year I will be ${age + 1}.`;

console.log("Single:\n", single);

console.log("Double:\n", double);

console.log("Backtick:\n", backtick);
