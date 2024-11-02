// Import the readline module
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question("Please enter your number: ", function (userInput) {
    const enteredNumber = Number(userInput);
    const reminderNumber = enteredNumber%5;
    console.log("The reminder of your number by 5 is " + Number(reminderNumber))
    rl.close(); // Close the interface after input

});