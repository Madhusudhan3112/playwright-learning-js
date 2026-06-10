var a = 10;
console.log(a); // Output: 10

function printhello() {
    console.log("Hello, World!");
    var a = 20;
    console.log(a); // Output: 20
    if (true) {
        var a = 30;
        console.log(a); // Output: 30
    }
    console.log("F---->", a); // Output: 30 (because 'var' is function-scoped, not block-scoped)
}
printhello();
console.log(a); // Output: 10 (because 'a' inside the function is a different variable due to function scope)