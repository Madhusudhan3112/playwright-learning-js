var v = 10;
let l = 20;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // redeclaration allowed with var
browser = "Edge"; // reassignment allowed with var

var testcases = ["login", "signup", "checkout"];

for(var i = 0; i < testcases.length; i++) {
console.log("Running Test:", testcases[i]);
}

console.log("loop counter leaked outside", i); // i is accessible here due to var's function scope
