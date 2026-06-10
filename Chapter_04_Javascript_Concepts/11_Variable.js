var a = 10;
console.log("Value of a:", a);

function printhello() {
    console.log("Hello World");

    var a  = 20;
    console.log("Value of a inside function:", a);

    if (true) { 
    var a = 30; // var is function-scoped, so this 'a' is the same as the one declared in the function
    console.log("Value of a inside if block:", a);
    }
} 
printhello();