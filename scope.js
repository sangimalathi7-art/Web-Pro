// 📘 JavaScript Scope Mastery Tasks

// 🎯 Focus: Understanding var, let, const, scope, hoisting, re-declaration, and behavior in blocks/functions/globals.

// 🔰 Level 1: Basic Scope (Block vs Function)

// These help understand the foundations of scope.
// 🧪 Task 1: var inside a function

function greet() {
  var message = "Hello";
  console.log(message);
}
greet();
// Try: console.log(message); // What happens?
// 🧪 Task 2: let inside a block

{
  let count = 10;
  console.log(count);
}

// // Try: console.log(count); // Why error?
// // 🧪 Task 3: var inside if-statement

if (true) {
  var name = "Ali";
  // What prints?
}
console.log(name);
// // 🧪 Task 4: const inside block

{
  const pi = 3.14;
  console.log(pi);
}

// // Try to access `pi` outside — what happens?


var a = 1;
let b = 2;

console.log(window.a); // What is this in browser?
console.log(window.b); // Any difference? yes output shows undefined
// // 🧠 Level 2: Intermediate – Hoisting & Shadowing

// // These help build understanding of how memory is handled.
// // 🧪 Task 6: var hoisting surprise

console.log(msg);
var msg = "Hi"; // Why is this undefined, not error?


// // 🧪 Task 7: let hoisting error

// console.log(num);
// let num = 5; // What error happens here?


// // 🧪 Task 8: Shadowing let

let lang = "JS";
{
  let lang = "Python";
  console.log(lang); // Which one prints?
}
console.log(lang); // Why different?


// // 🧪 Task 9: Block scoping in loops

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// // Try with `var` — what changes?


// // 🧪 Task 10: Re-declaring variables

// var x = 10;
// var x = 20; // Allowed? Yes, because var allowed redeclare
// console.log(x)

// let y = 10;
// let y = 20; // Allowed? No, because let not allowed redeclare

// // 🧠 Level 3: Advanced – Real-World Bugs & Patterns

// // Apply knowledge to prevent real bugs and write cleaner code.
// // 🧪 Task 11: IIFE to isolate scope

(function () {
  var secret = "hidden";
  console.log(secret);
})
();

// // Try accessing secret outside


// // 🧪 Task 12: Accidental Global with var

function test() {
  x = "Oops!";
}
test();
console.log(x); // Why is this global?


// // 🧪 Task 13: Temporal Dead Zone

// {
//   // What happens here?
//   console.log(typeof z);
//   let z = 100;
// }


// // 🧪 Task 14: const with mutable object

const user = { name: "John" };
console.log(user.name = "Alice"); // Allowed?
// user={}; // Allowed?
// // 🧪 Task 15: Scope in event listeners

for (var i = 0; i < 3; i++) {
  document.body.addEventListener("click", function () {
    console.log(i); // Click and see
  });
}
// // Fix using let