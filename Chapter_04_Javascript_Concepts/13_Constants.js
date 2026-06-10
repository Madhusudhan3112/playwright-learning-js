//const BASE_URL = "https://api.example.com/data";

//BASE_URL = "https://api.newexample.com/data"; // This will throw an error because BASE_URL is a constant

let name = "madhu";
name = "tester"; // This is allowed because 'name' is declared with 'let', not 'const'

{
let name = "testing";
}

function test() {
    let name = "madhu";
    console.log(name); // This will log "madhu"
}   
test();