
// function  for taking  player's Choice and returning it.
function playerPlay() {
  let playerSelectionCS = prompt("Choose any one form Rock,Paper,Scissor");// case sensitive input
  let playerSelection = playerSelectionCS.toLowerCase();// converting to case insensitive
  return(playerSelection);
}

// function for random computer choice and returning it.
function computerPlay() {

  let computerSelection;

  let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //Generates a Random number between 1 and 3

  if (random == 1) {
    computerSelection = "rock"
  } else if (random == 2) {
    computerSelection = "paper"
  } else {
    computerSelection = "scissor"
  }
  return (computerSelection);
}

let playerScore = 0;   //Store computer's and Player's score for the Game
let computerScore = 0;

// function for playing a single round of the game
function playRound(playerSelection, computerSelection) {

  console.log(computerSelection);
  console.log(playerSelection);
  if (computerSelection == playerSelection) {
    console.log("Same selectin hence a Draw")
    playerScore += 1;
    computerScore += 1;
  } else if (computerSelection == "rock" & playerSelection == "paper") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    playerScore += 1;
  } else if (computerSelection == "rock" & playerSelection == "scissor") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    computerScore += 1;
  } else if (computerSelection == "paper" & playerSelection == "Scissor") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    playerScore += 1;
  } else if (computerSelection == "paper" & playerSelection == "rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    computerScore += 1;
  } else if (computerSelection == "scissor" & playerSelection == "rock") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    playerScore += 1;
  } else if (computerSelection == "scissor" & playerSelection == "paper") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    computerScore += 1;
  } else {
    console.log("enter a valid input")

  }
} 
//function for playing five rounds and outputs the result of the game
function game() {
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  if (playerScore > computerScore) {
    console.log(`Your score : ${playerScore}
Computer's score ${computerScore}`)
    console.log("Congratulations! You won this game");
  } else if (computerScore > playerScore) {
    console.log(`Your score : ${playerScore}
Computer's score ${computerScore}`)
    console.log("You lost this game")
  } else if (computerScore == playerScore &   (computerScore+playerScore !== 0)) {
    console.log("Both have same score so its a Draw")
  } else if (computerScore == playerScore &   (computerScore+playerScore == 0)) {
    console.log("Something is wrong please check your inputs")
  }
  else {
    console.log("Something is wrong")
  }

}

game();

