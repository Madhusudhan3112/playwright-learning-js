// ============================================================
// 38 - Confusing Comparison: == (Loose Equality) vs === (Strict Equality)
// ============================================================
// This file demonstrates the tricky differences between JavaScript's
// loose equality (==) and strict equality (===) operators.
//
// RULE OF THUMB: Always prefer === unless you explicitly need type coercion.
// ============================================================

// --------------------------------------------------------------
// 1. BASIC DIFFERENCE
// --------------------------------------------------------------
// === checks value AND type (strict equality)
// == checks value after performing type coercion (loose equality)

console.log("=== BASIC DIFFERENCE ===");

let num = 5;
let str = "5";

console.log(num == str);   // true  -> "5" is coerced to number 5
console.log(num === str);  // false -> number !== string

// --------------------------------------------------------------
// 2. NULL AND UNDEFINED
// --------------------------------------------------------------
// null and undefined are ONLY equal to each other with ==
// They are NOT equal to anything else (0, false, "")

console.log("\n=== NULL & UNDEFINED ===");

console.log(null == undefined);   // true  (special case)
console.log(null === undefined);  // false (different types)

console.log(null == 0);     // false (surprising!)
console.log(null == false); // false
console.log(null == "");    // false

console.log(undefined == 0);     // false
console.log(undefined == false); // false
console.log(undefined == "");    // false

// --------------------------------------------------------------
// 3. STRINGS VS NUMBERS
// --------------------------------------------------------------
// When comparing string == number, JS tries to convert string to number.

console.log("\n=== STRING vs NUMBER ===");

console.log("10" == 10);          // true
console.log("10" === 10);         // false
console.log("   10   " == 10);    // true (whitespace is trimmed during coercion)
console.log("   10   " === 10);   // false
console.log("10px" == 10);        // false (cannot coerce "10px" to number)

// --------------------------------------------------------------
// 4. BOOLEANS VS OTHER TYPES
// --------------------------------------------------------------
// When comparing boolean == anything, the boolean is converted to number:
// true -> 1, false -> 0

console.log("\n=== BOOLEAN COERCION ===");

console.log(true == 1);       // true
console.log(true == "1");     // true ("1" -> 1, true -> 1)
console.log(true == 2);       // false (true -> 1, 1 != 2)
console.log(false == 0);      // true
console.log(false == "0");    // true ("0" -> 0, false -> 0)
console.log(false == "");     // true ("" -> 0, false -> 0)

console.log(true === 1);      // false
console.log(false === 0);     // false

// --------------------------------------------------------------
// 5. EMPTY STRING AND ZERO
// --------------------------------------------------------------
// Empty string is coerced to 0 in numeric context.

console.log("\n=== EMPTY STRING & ZERO ===");

console.log("" == 0);         // true
console.log("" == false);     // true
console.log("" === 0);        // false
console.log("" === false);    // false

// --------------------------------------------------------------
// 6. OBJECTS AND PRIMITIVES
// --------------------------------------------------------------
// When object == primitive, the object is converted to a primitive value
// by calling valueOf() or toString().

console.log("\n=== OBJECT vs PRIMITIVE ===");

let obj = {
    valueOf: function() {
        return 42;
    }
};

console.log(obj == 42);       // true  (valueOf returns 42)
console.log(obj === 42);      // false (different types)

let arr = [10];
console.log(arr == 10);       // true  ([10].toString() -> "10" -> 10)
console.log(arr === 10);      // false

let objStr = {
    toString: function() {
        return "hello";
    }
};
console.log(objStr == "hello");  // true
console.log(objStr === "hello"); // false

// --------------------------------------------------------------
// 7. ARRAYS
// --------------------------------------------------------------
// Arrays are converted to strings by joining elements with commas.

console.log("\n=== ARRAYS ===");

console.log([] == "");        // true  ([] -> "")
console.log([] == 0);         // true  ([] -> "" -> 0)
console.log([] == false);     // true  ([] -> "" -> 0, false -> 0)

console.log([1,2] == "1,2");  // true
console.log([1,2] === "1,2"); // false

// --------------------------------------------------------------
// 8. NaN (NOT A NUMBER)
// --------------------------------------------------------------
// NaN is NOT equal to anything, even itself!
// Use Number.isNaN() to check for NaN.

console.log("\n=== NaN ===");

console.log(NaN == NaN);      // false (special IEEE 754 rule)
console.log(NaN === NaN);     // false
console.log(Number.isNaN(NaN)); // true (correct way to check)

// --------------------------------------------------------------
// 9. INFINITY
// --------------------------------------------------------------

console.log("\n=== INFINITY ===");

console.log(Infinity == Infinity);   // true
console.log(Infinity === Infinity);  // true
console.log(-Infinity == -Infinity); // true

// --------------------------------------------------------------
// 10. COMMON TRICKY CASES (IQ TRAPS)
// --------------------------------------------------------------

console.log("\n=== COMMON TRICKY CASES ===");

console.log("0" == false);           // true  ("0" -> 0, false -> 0)
console.log("0" === false);          // false

console.log(0 == false);             // true
console.log(0 === false);            // false

console.log("\t" == 0);              // true (tab string -> 0)
console.log("\n" == 0);              // true (newline string -> 0)
console.log(" " == 0);               // true (space string -> 0)

console.log([0] == false);           // true ([0] -> "0" -> 0, false -> 0)
console.log([0] === false);          // false

console.log("\n\n\n" == 0);          // true (whitespace strings -> 0)

// --------------------------------------------------------------
// 11. THE EXCEPTION: SAME TYPE COMPARISON
// --------------------------------------------------------------
// If both operands are the SAME type, == behaves exactly like ===

console.log("\n=== SAME TYPE COMPARISON ===");

console.log(5 == 5);                 // true
console.log(5 === 5);                // true

console.log("abc" == "abc");         // true
console.log("abc" === "abc");        // true

console.log(null == null);           // true
console.log(null === null);          // true

// --------------------------------------------------------------
// SUMMARY
// --------------------------------------------------------------
//  ==  -> Allows type coercion (type conversion) before comparison.
//  === -> No type coercion; checks both value and type.
//
//  RECOMMENDATION: Always use === and !== to avoid unexpected bugs.
//
//  Exceptions where == is commonly accepted:
//    - if (x == null)  // checks for null OR undefined
//
// ============================================================
