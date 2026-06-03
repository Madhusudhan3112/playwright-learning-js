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

// ============================================================
// 3. NAMING CONVENTIONS (Best Practices)
// ============================================================
// Naming conventions are agreed-upon standards that make code
// more readable and maintainable across teams.
// ============================================================

// ------------------------------------------------------------
// 3.1 CAMEL CASE (camelCase)
// ------------------------------------------------------------
// First word lowercase, each subsequent word capitalized.
// Used for: variables, functions, methods, object properties
// ------------------------------------------------------------

// Variables
let userName = "john_doe";
let totalPrice = 99.99;
let isActive = true;
let customerAddressLine1 = "123 Main St";
let numberOfItemsInCart = 5;

// Functions
function getUserName() { return userName; }
function calculateTotalPrice(price, tax) { return price + tax; }
function fetchUserDataById(userId) { return { id: userId, name: "User" }; }
function validateEmailAddress(email) { return email.includes("@"); }

// Object properties
let user = {
    firstName: "Alice",
    lastName: "Smith",
    emailAddress: "alice@example.com",
    dateOfBirth: "1990-05-15",
    isEmailVerified: false
};

// Methods in objects
let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    addTwoNumbers() { return this.firstNumber + this.secondNumber; },
    multiplyTwoNumbers() { return this.firstNumber * this.secondNumber; }
};

// ------------------------------------------------------------
// 3.2 PASCAL CASE (PascalCase)
// ------------------------------------------------------------
// Every word starts with a capital letter.
// Used for: classes, constructors, React components, enums, types
// ------------------------------------------------------------

// Classes
class UserProfile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getDisplayName() { return this.name; }
}

class ShoppingCart {
    constructor() { this.items = []; }
    addItem(item) { this.items.push(item); }
    getTotalItems() { return this.items.length; }
}

class ProductCategoryManager {
    constructor() { this.categories = []; }
}

// React-style components (function components also use PascalCase)
function UserProfileCard(props) {
    return { component: "UserProfileCard", user: props.user };
}

function PrimaryNavigationMenu() {
    return { component: "PrimaryNavigationMenu" };
}

// Enums (objects with constant values)
const OrderStatus = {
    Pending: "PENDING",
    Processing: "PROCESSING",
    Shipped: "SHIPPED",
    Delivered: "DELIVERED",
    Cancelled: "CANCELLED"
};

const UserRole = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER",
    Guest: "GUEST"
};

// ------------------------------------------------------------
// 3.3 SNAKE CASE (snake_case)
// ------------------------------------------------------------
// All lowercase with underscores between words.
// Used for: file names, some API parameters, Python-style JS
// NOT typically used for JS variables, but seen in configs
// ------------------------------------------------------------

// Configuration objects (common in API settings, database configs)
let database_config = {
    host_name: "localhost",
    port_number: 5432,
    user_name: "admin",
    password_hash: "abc123",
    max_connections: 100,
    connection_timeout_ms: 5000
};

// API payload keys (some APIs use snake_case)
let api_request_payload = {
    user_id: 12345,
    order_date: "2024-01-15",
    shipping_address: "456 Oak Ave",
    is_gift_wrapped: true
};

// File names (convention for JS files in some projects)
// my_helper_functions.js
// user_profile_controller.js
// database_connection_utils.js

// ------------------------------------------------------------
// 3.4 UPPER SNAKE CASE (UPPER_SNAKE_CASE / SCREAMING_SNAKE_CASE)
// ------------------------------------------------------------
// All uppercase with underscores between words.
// Used for: constants, configuration values, magic numbers, flags
// ------------------------------------------------------------

// Mathematical constants
const PI = 3.14159;
const EULER_NUMBER = 2.71828;
const GOLDEN_RATIO = 1.61803;

// Application constants
const MAX_USERS = 100;
const MIN_PASSWORD_LENGTH = 8;
const MAX_LOGIN_ATTEMPTS = 5;
const SESSION_DURATION_MINUTES = 30;

// API and configuration
const API_BASE_URL = "https://api.example.com";
const API_VERSION = "v2";
const DEFAULT_TIMEOUT = 5000;
const RETRY_COUNT = 3;

// Feature flags / environment settings
const DEBUG_MODE = false;
const ENABLE_ANALYTICS = true;
const ALLOW_USER_REGISTRATION = true;
const MAINTENANCE_MODE = false;

// Error codes
const ERROR_CODE_NOT_FOUND = 404;
const ERROR_CODE_UNAUTHORIZED = 401;
const ERROR_CODE_SERVER_ERROR = 500;

// Color constants (hex values)
const COLOR_PRIMARY = "#007BFF";
const COLOR_SECONDARY = "#6C757D";
const COLOR_SUCCESS = "#28A745";
const COLOR_DANGER = "#DC3545";

// ------------------------------------------------------------
// 3.5 KEBAB CASE (kebab-case) - NOT for identifiers!
// ------------------------------------------------------------
// All lowercase with hyphens between words.
// CANNOT be used for JS variable/function names (hyphen = minus operator).
// Used for: CSS class names, HTML attributes, file names, URL slugs
// ------------------------------------------------------------

// CSS class names (string values, not identifiers)
let cssClasses = {
    primaryButton: "btn-primary",
    dangerAlert: "alert-danger",
    largeModal: "modal-lg",
    isHidden: "is-hidden",
    hasError: "has-error",
    isActive: "is-active"
};

// HTML data attributes
let dataAttributes = {
    userId: "data-user-id",
    toggleModal: "data-toggle-modal",
    targetElement: "data-target-element"
};

// URL slugs (string values)
let pageSlugs = {
    aboutPage: "/about-us",
    contactPage: "/contact-support",
    userProfile: "/user-profile-settings"
};

// File names (commonly used)
// my-script.js
// user-profile.html
// main-styles.css
// api-helpers.test.js

// ------------------------------------------------------------
// 3.6 HUNGARIAN NOTATION (Legacy / Older Style)
// ------------------------------------------------------------
// Prefix indicates the data type. Less common in modern JS.
// Still seen in some legacy codebases or Win32 API style.
// ------------------------------------------------------------

let strUserName = "Alice";     // str = string
let nUserAge = 25;             // n = number
let bIsLoggedIn = true;        // b = boolean
let arrProductList = [];       // arr = array
let objUserData = {};          // obj = object
let fnClickHandler = () => {}; // fn = function
let elSubmitButton = {};       // el = DOM element (simulated)

// ------------------------------------------------------------
// 3.7 LEADING UNDERSCORE (_private)
// ------------------------------------------------------------
// Indicates "private" or "internal" by convention.
// JavaScript does NOT enforce privacy, but it's a strong hint.
// Used for: private properties, internal methods, unused params
// ------------------------------------------------------------

// "Private" class properties (by convention)
class BankAccount {
    constructor(balance) {
        this._balance = balance;           // "private" property
        this._accountType = "checking";    // "private" property
        this._transactionHistory = [];     // "private" property
    }
    getBalance() { return this._balance; }
    _calculateInterest() {              // "private" method
        return this._balance * 0.05;
    }
}

// Unused parameters (ESLint convention)
function handleRequest(request, _response, _next) {
    // _response and _next are intentionally unused
    return request.body;
}

// Internal utility (not meant for external use)
function _sortById(items) {
    return items.sort((a, b) => a.id - b.id);
}

// ------------------------------------------------------------
// 3.8 TRAILING UNDERSCORE (name_)
// ------------------------------------------------------------
// Used when you need a variable name that matches a keyword.
// Avoid if possible, but useful for API compatibility.
// ------------------------------------------------------------

// let class_ = "Math101";       // Avoids keyword conflict
// let const_ = 10;              // Avoids keyword conflict
// let var_ = "value";           // Avoids keyword conflict
// let private_ = true;          // Avoids strict mode reserved word

// ------------------------------------------------------------
// 3.9 DOLLAR SIGN PREFIX ($var)
// ------------------------------------------------------------
// Commonly used for DOM elements, jQuery objects, template literals,
// or observable values (Vue, Angular, Svelte).
// ------------------------------------------------------------

// DOM element references
const $button = { id: "submit-btn", clicked: false }; // Simulating DOM element
const $modal = { className: "modal", visible: false }; // Simulating DOM element
const $formInputs = ["input1", "input2"]; // Simulating NodeList

// jQuery or similar library style
const $ = function(selector) { return { selector: selector, library: "jQuery style" }; };
const $$ = (selector) => [selector + "-1", selector + "-2"]; // querySelectorAll style

// Vue.js / Svelte reactive references
let $count = { value: 0, reactive: true };  // Simulating Svelte store
let $store = { state: {}, subscribe: () => {} }; // Simulating reactive store

// Template literal functions (tagged templates)
function $html(strings, ...values) {
    return strings.reduce((result, string, i) => result + string + (values[i] || ""), "");
}

// ------------------------------------------------------------
// 3.10 DOUBLE UNDERSCORE (__dirname)
// ------------------------------------------------------------
// Node.js built-in variables and "dunder" (double underscore) methods.
// Avoid creating your own names with double underscores.
// ------------------------------------------------------------

// Node.js built-in (already declared in Section 1)
// __dirname = "/path/to/current/directory";   // Directory of current file
// __filename = "/path/to/file.js";           // Path to current file

// Python-style "dunder" (rare in JS, but some libraries use it)
// __init__(), __str__(), __repr__()

// ------------------------------------------------------------
// 3.11 BANG PREFIX (!name) - NOT for identifiers!
// ------------------------------------------------------------
// Sometimes used in boolean variable naming (as a convention).
// Actually written without the ! in the name.
// ------------------------------------------------------------

let isVisible = true;
let hasPermission = false;
let shouldUpdate = true;
let canEdit = false;
let didLoad = true;
let willUnmount = false;

// ------------------------------------------------------------
// PRINT ALL NAMING CONVENTIONS
// ------------------------------------------------------------
console.log("=== NAMING CONVENTIONS ===");
console.log("");

console.log("--- 3.1 camelCase ---");
console.log("Variables: userName =", userName);
console.log("Variables: totalPrice =", totalPrice);
console.log("Variables: isActive =", isActive);
console.log("Function: getUserName() =", getUserName());
console.log("Function: calculateTotalPrice(100, 10) =", calculateTotalPrice(100, 10));
console.log("Object property: user.firstName =", user.firstName);
console.log("Object method: calculator.addTwoNumbers() [after setting numbers]");
calculator.firstNumber = 5;
calculator.secondNumber = 3;
console.log("  calculator.addTwoNumbers() =", calculator.addTwoNumbers());
console.log("");

console.log("--- 3.2 PascalCase ---");
console.log("Class: UserProfile");
let profile = new UserProfile("Alice", "alice@example.com");
console.log("  profile.getDisplayName() =", profile.getDisplayName());
console.log("Component: UserProfileCard =", UserProfileCard({ user: "Alice" }));
console.log("Enum: OrderStatus.Pending =", OrderStatus.Pending);
console.log("Enum: UserRole.Admin =", UserRole.Admin);
console.log("");

console.log("--- 3.3 snake_case ---");
console.log("Config: database_config.host_name =", database_config.host_name);
console.log("API payload: api_request_payload.user_id =", api_request_payload.user_id);
console.log("File names: my_helper_functions.js, user_profile_controller.js");
console.log("");

console.log("--- 3.4 UPPER_SNAKE_CASE ---");
console.log("Constant: PI =", PI);
console.log("Constant: MAX_USERS =", MAX_USERS);
console.log("Constant: API_BASE_URL =", API_BASE_URL);
console.log("Constant: DEBUG_MODE =", DEBUG_MODE);
console.log("Constant: COLOR_PRIMARY =", COLOR_PRIMARY);
console.log("Constant: ERROR_CODE_NOT_FOUND =", ERROR_CODE_NOT_FOUND);
console.log("");

console.log("--- 3.5 kebab-case (NOT for identifiers!) ---");
console.log("CSS class: cssClasses.primaryButton =", cssClasses.primaryButton);
console.log("Data attr: dataAttributes.userId =", dataAttributes.userId);
console.log("URL slug: pageSlugs.aboutPage =", pageSlugs.aboutPage);
console.log("File names: my-script.js, user-profile.html");
console.log("");

console.log("--- 3.6 Hungarian Notation (Legacy) ---");
console.log("String: strUserName =", strUserName);
console.log("Number: nUserAge =", nUserAge);
console.log("Boolean: bIsLoggedIn =", bIsLoggedIn);
console.log("Array: arrProductList =", arrProductList);
console.log("");

console.log("--- 3.7 Leading Underscore (_private) ---");
let bankAccount = new BankAccount(5000);
console.log("Private property: _balance =", bankAccount.getBalance());
console.log("Private method: _calculateInterest [called internally]");
console.log("Unused params: handleRequest(req, _res, _next)");
console.log("");

console.log("--- 3.8 Trailing Underscore (name_) ---");
console.log("Used to avoid keyword conflicts: class_, const_, var_");
console.log("Example: let class_ = 'Math101'; // Avoids 'class' keyword");
console.log("");

console.log("--- 3.9 Dollar Sign Prefix ($var) ---");
console.log("DOM element: $button =", $button);
console.log("jQuery style: $('#app') =", $("#app"));
console.log("Reactive: $count =", $count);
console.log("Template tag: $html`Hello` =", $html`Hello`);
console.log("");

console.log("--- 3.10 Double Underscore (__dirname) ---");
console.log("Node built-in: __dirname =", __dirname);
console.log("Node built-in: __filename =", __filename);
console.log("");

console.log("--- 3.11 Boolean Prefixes ---");
console.log("isVisible =", isVisible);
console.log("hasPermission =", hasPermission);
console.log("shouldUpdate =", shouldUpdate);
console.log("canEdit =", canEdit);
console.log("didLoad =", didLoad);
console.log("willUnmount =", willUnmount);
console.log("");

// ============================================================
// 4. INVALID IDENTIFIERS (These will cause Syntax Errors!)
// ============================================================
// ⚠️ Uncomment any of these to see the error!

// 1. Cannot start with a digit
// let 1stPlace = "gold";     // ❌ SyntaxError: Invalid or unexpected token
// let 2ndItem = "item two";  // ❌ SyntaxError: Invalid or unexpected token
// let 123abc = 123;          // ❌ SyntaxError: Invalid or unexpected token

// 2. Cannot contain spaces
// let my variable = 10;      // ❌ SyntaxError: Unexpected identifier
// let user name = "John";    // ❌ SyntaxError: Unexpected identifier

// 3. Cannot contain hyphens (JS thinks it's subtraction!)
// let my-var = 5;            // ❌ SyntaxError: Unexpected token '-'
// let user-name = "Jane";    // ❌ SyntaxError: Unexpected token '-'

// 4. Cannot contain special characters (@, #, %, etc.)
// let my@var = 1;            // ❌ SyntaxError: Unexpected token '@'
// let my#var = 2;            // ❌ SyntaxError: Unexpected token '#'
// let my%var = 3;            // ❌ SyntaxError: Unexpected token '%'
// let my.var = 4;            // ❌ SyntaxError: Unexpected token '.'
// let my/var = 5;            // ❌ SyntaxError: Unexpected token '/'

// 5. Cannot use reserved keywords
// let var = 10;              // ❌ SyntaxError: Unexpected token 'var'
// let function = () => {};  // ❌ SyntaxError: Unexpected token 'function'
// let class = "Math";       // ❌ SyntaxError: Unexpected token 'class'
// let return = 5;           // ❌ SyntaxError: Unexpected token 'return'
// let if = true;            // ❌ SyntaxError: Unexpected token 'if'
// let for = 10;             // ❌ SyntaxError: Unexpected token 'for'
// let const = 20;           // ❌ SyntaxError: Unexpected token 'const'
// let let = 30;             // ❌ SyntaxError: let is disallowed as a lexically bound name
// let new = "object";       // ❌ SyntaxError: Unexpected token 'new'
// let this = "context";     // ❌ SyntaxError: Unexpected token 'this'
// let true = false;         // ❌ SyntaxError: Unexpected token 'true'
// let false = true;         // ❌ SyntaxError: Unexpected token 'false'
// let null = 0;             // ❌ SyntaxError: Unexpected token 'null'

// 6. Cannot be just a digit
// let 123 = "one two three"; // ❌ SyntaxError: Invalid or unexpected token

// ============================================================
// 5. RESERVED KEYWORDS LIST (Cannot use as identifiers)
// ============================================================

/*
break      case       catch      class
const      continue   debugger   default
delete     do         else       export
extends    finally    for        function
if         import     in         instanceof
new        return     super      switch
this       throw      try        typeof
var        void       while      with
yield      let        static     await

Strict mode reserved words:
implements interface  package    private
protected  public

Literals/Special values:
true       false      null       undefined    NaN    Infinity

Contextual keywords (allowed in most places, but avoid confusion):
as         async      from       get          of     set      target
*/

// Examples of valid but CONFUSING names to avoid:
// let name = "name";         // Avoid: window.name exists in browsers
// let top = 100;             // Avoid: window.top exists in browsers
// let undefined = "value";   // Avoid: overwrites global undefined (bad practice!)

console.log("=== RESERVED KEYWORDS ===");
console.log("These words CANNOT be used as variable/function names:");
console.log("var, let, const, function, class, if, else, for, while, return, etc.");
console.log("See the commented list in the source file for the complete list.");
console.log("");

// ============================================================
// 6. CORRECT vs INCORRECT: Side-by-Side Examples
// ============================================================

// ❌ BAD PRACTICES (Avoid these!)
// let 2beOrNot2be = "question";  // Starts with digit
// let my-variable = 10;           // Contains hyphen
// let my variable = 20;           // Contains space
// let total$amount# = 30;         // Contains invalid characters
// let class = "Math101";          // Uses reserved keyword

// ✅ GOOD PRACTICES (Use these!)
let toBeOrNotToBe = "question";
let myVariable = 10;
let myOtherVariable = 20;
let totalAmount = 30;
let mathClass = "Math101";

console.log("=== CORRECT vs INCORRECT ===");
console.log("toBeOrNotToBe:", toBeOrNotToBe);
console.log("myVariable:", myVariable);
console.log("mathClass:", mathClass);
console.log("");

// ============================================================
// 7. TRICKY EDGE CASES
// ============================================================

// These are VALID but not recommended:
let _ = "underscore lodash";   // Valid, used by lodash library
let $$$ = "triple dollar";     // Valid, but confusing
let __proto__ = {};            // Valid, but shadows Object.prototype
let constructor = "bad idea";   // Valid, but shadows constructor property

// These look like reserved words but are NOT (still avoid for clarity):
// let enum = 1;    // ❌ Actually reserved in JS!
// let await = 1;   // ❌ Actually reserved!

console.log("=== EDGE CASES ===");
console.log("_:", _);
console.log("$$$:", $$$);
console.log("(These are valid but NOT recommended)");
console.log("");

// ============================================================
// 8. SUMMARY
// ============================================================
console.log("=== SUMMARY ===");
console.log("✅ Valid identifiers start with: letter, _, or $");
console.log("✅ After first character: letters, digits, _, $");
console.log("✅ JavaScript is case-sensitive: myVar ≠ MyVar");
console.log("❌ Cannot start with a digit");
console.log("❌ Cannot contain spaces or special characters (-, @, #, etc.)");
console.log("❌ Cannot use reserved keywords (var, let, function, class, etc.)");
console.log("💡 Use camelCase for variables/functions");
console.log("💡 Use PascalCase for classes");
console.log("💡 Use UPPER_SNAKE_CASE for constants");
console.log("💡 Avoid confusing names like name, top, undefined");

// Export for module systems (optional)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        userName,
        PI,
        UserProfile,
        getUserName
    };
}
