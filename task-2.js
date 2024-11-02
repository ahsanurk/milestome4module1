// Import the readline module
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question("Enter your Mathematics mark: ", function (mathMarks) {
    const math = Number(mathMarks);
    var totalSubjects = null;
    totalSubjects += 1;

    rl.question("Enter your Biology mark: ", function (bioMarks) {
        const biology = Number(bioMarks);
        totalSubjects += 1;

        rl.question("Enter your Chemistry mark: ", function (chemMarks) {
            const chemistry = Number(chemMarks);
            totalSubjects += 1;

            rl.question("Enter your Physics mark: ", function (physMarks) {
                const physics = Number(physMarks);
                totalSubjects += 1;

                rl.question("Enter your Bangle mark: ", function (bngMarks) {
                    const bangle = Number(bngMarks);
                    totalSubjects += 1;

                    const average = parseFloat((math + biology + chemistry + physics + bangle) / totalSubjects);

                    console.log("Your average mark is " + Number(average.toFixed(2)));

                    rl.close(); // Close the interface after input
                });
            });

        });

    });
});