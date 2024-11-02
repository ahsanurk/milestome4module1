// let takeInPocket = prompt('How much taka you have?');
// console.log("Hello, you have a total of " + takeInPocket + " taka in your pocket");

// let userInput = prompt("Please enter your name:");
// console.log("Hello, " + userInput + "!");

// Import the readline module
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question("How much taka do you have in your pocket: ", function (userInput1) {

    var takaInPocket = Number(userInput1);
    rl.question("What is the total cost of 1 KG Oranges and 1 KG Apples : ", function (userInput2) {
        var totalCost = Number(userInput2);
        console.log("Your change back amount is " + Number(takaInPocket - totalCost))
        rl.close(); // Close the interface after input
    });
});