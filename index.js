import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: ",
    },
]);
const { userGuess } = answer;
if (userGuess === systemGeneratedNo) {
    console.log(userGuess, "User Guess", systemGeneratedNo, "SYs");
    console.log("Yeaaa Your answer is correct \n You Win!");
}
else {
    console.log("Please try again Better Luck next time!");
}
