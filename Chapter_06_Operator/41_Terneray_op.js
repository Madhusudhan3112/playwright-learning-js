let madhu_age = 17;
let madhu_will_goto_goa = madhu_age >= 18 ? "He will go to goa" : "No chance to go to goa";
console.log(madhu_will_goto_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS

let environment = "staging";
let baseUrl = environment === "production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);  // https://staging-api.example.com

let isCI = true;
let browsermode = isCI ? "headless" : "headed";
console.log("launching browser in " + browsermode, "mode");  // headless

let responseTime = 1200;
let sla = 1300;
let responsestatus = responseTime <= sla ? "✅ Within SLA" : "❌ Exceeded SLA";
console.log(`Response: ${responseTime}ms — ${responsestatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

// Example of nested ternary operator
let age = 25;
