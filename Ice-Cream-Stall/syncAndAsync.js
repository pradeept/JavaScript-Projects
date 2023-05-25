// Demonstrating Synchronous and Asynchronous JavaScript

/* -------------Synchronous ------------ */

// console.log(" I ");

// console.log(" eat ");

// console.log(" ice cream ");

// console.log(" with a spoon ");


/* --------Asynchronous ---------------*/

console.log(" I ");

console.log(" eat ");

setTimeout(()=>{console.log(" ice cream ");},4000); //😞 unfortunately this line gets executed after below LOC

console.log(" with a spoon ");

//To overcome ☺️ this we make use of callbacks, async/await functions and Promises.
