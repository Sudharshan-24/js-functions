// Functions
function printHelloWorld() {
    console.log("Hello, world!");
}
printHelloWorld();


// Local variables
// A variable declared inside a function is only visible inside that function.
function showMessage() {
    let message = "Hello, JavaScript!";
    console.log(message);
}
showMessage();
// console.log(message);  // Error, the variable is local to the function


// Outer variables
// Function can access an outer variable.
let myName = "Sudharshan";

function callMyName() {
    let greet = "Welcome, " + myName;
    console.log(greet);
}
callMyName();

// The function has full access to the outer variable. It can modify it as well.
let userName = "Sudharshan";

function greetUserName() {
    userName = "Krishna";  // changed the outer variable

    let greet = "Hello, " + userName;
    console.log(greet);
}
console.log(userName);  // "Sudharshan before the function call"
greetUserName();
console.log(userName); // "Krishna", the value was modified by the function

// Note: The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let usrName = "John Doe";

function showMessage() {
    let usrName = "Jane Doe"; // declare a local variable
    let message = "Hello, " + usrName;
    console.log(message);
}
showMessage();
console.log(usrName);


// Parameters
function fullName(firstName, lastName) {
    console.log("Hi, " + firstName + lastName);
}
fullName("Jane ", "Smith");


function showGreet(personName, country) {
    personName = "*" + personName + "* ";
    console.log("Welcome, " + personName + "from " + country);
}
let personName = "John Smith";
showGreet(personName, "UK");
console.log(personName);


// Default values
function greetToParty(personName, message = ", welcome to the party!") {
    console.log(personName + message);
}
greetToParty("Jane Doe");


// Returning a value
// Example 1:
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));

// Example 2:
function multiply(m, n) {
    return m * n;
}
let result = multiply(4, 2);
console.log(result);

// Example 3:
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}

let age = prompt("How old are you?");

if (checkAge(age)) {
    alert("Access granted");
} else {
    alert("Access denied");
}


// Function expressions
// Function Declaration syntax: a function, declared as a separate statement, in the main code flow.
function sayHi() {
    console.log("Hi!");
}
sayHi();

// Function Expression syntax: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” = .
let sayHello = function () {
    console.log("Hello!");
}
sayHello();

// Function is a value
function sayWow() {
    alert("Wow!!!");
}
alert(sayWow);

function sayYes() {
    alert("Yes!");
}
let agree = sayYes;
agree();
sayYes();


// Callback functions
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}
ask("Do you agree?", showOk, showCancel);

// Arrow functions
let divide = (x, y) => x % y;
console.log(divide(3, 7));
