// ============================================================
// JAVASCRIPT IDENTIFIERS - COMPLETE EXAMPLES
// ============================================================
// An identifier is a name given to variables, functions, classes,
// properties, etc.
// ============================================================

// ============================================================
// 1. VALID IDENTIFIERS
// ============================================================

// Starting with a letter
let firstName = "Alice";
let lastName = "Smith";
let age = 25;
let productList = [];

// Starting with underscore (often used for "private" variables)
let _privateVar = "secret";
let _count = 0;
let _dirname = "/path/to/dir"; // Common in Node.js style

// Starting with dollar sign (often used for DOM elements or jQuery)
let $element = { id: "btn", type: "mock DOM element" }; // Simulating DOM element
let $jQuery = function() { return "jQuery style"; }; // Simulating jQuery
let $$query = () => ["item1", "item2"]; // Simulating querySelectorAll

// Mixing letters, digits, underscores, and dollar signs
let user1 = "Bob";
let user_2 = "Carol";
let item$3 = "item three";
let $4sale = true; // Valid but NOT recommended
let _5star = "rating"; // Valid but NOT recommended
let my$Var = 100;
let my_var = 200;

// Unicode letters (valid but use ASCII for best compatibility)
let π = 3.14159;
let 变量 = "variable in Chinese";
let λ = () => {};
let café = "coffee";

console.log("=== VALID IDENTIFIERS ===");
console.log("firstName:", firstName);
console.log("_privateVar:", _privateVar);
console.log("π:", π);
console.log("变量:", 变量);
console.log("");

// ============================================================
// 2. CASE SENSITIVITY
// ============================================================
// JavaScript identifiers are case-sensitive!

let myVar = 10;
let MyVar = 20;
let myvar = 30;
let MYVAR = 40;

console.log("=== CASE SENSITIVITY ===");
console.log("myVar:", myVar);   // 10
console.log("MyVar:", MyVar);   // 20
console.log("myvar:", myvar);   // 30
console.log("MYVAR:", MYVAR);   // 40
console.log("These are all DIFFERENT variables!");
console.log("");