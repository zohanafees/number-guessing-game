import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random()*6+1)

const answer = await inquirer.prompt([
    {message: "Please guess the number: ", type: "number", name: "guessedNum"} 
])

if (answer.guessedNum === randomNumber) {
    console.log("Congratulation!")
} else {
    console.log("Try again")
}