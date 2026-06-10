let a = 10;
console.log(a); // Output: 10

function printhello() {
    console.log("Hello, World!");
    let a = 20;
    console.log(a); // Output: 20
    if (true) {
        let a = 30;
        console.log(a); // Output: 30
    }
    console.log("F---->", a); // Output: 30 (because 'var' is function-scoped, not block-scoped)
}
printhello();
console.log("Global Value",a); // Output: 10 (because 'a' inside the function is a different variable due to function scope)