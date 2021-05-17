// triggers when clicked rock 
const rockBtn = document.querySelector("#rock-btn");

rockBtn.addEventListener('click', rockGame);

function rockGame() {
	playRound("rock", computerPlay());
}

//triggers when clicked paper 
const paperBtn = document.querySelector("#paper-btn");

paperBtn.addEventListener('click', paperGame);

function paperGame() {
	playRound("paper", computerPlay());
}
//triggers when clicked scissor
const scissorBtn = document.querySelector("#scissor-btn")

scissorBtn.addEventListener('click', scissorGame);

function scissorGame() {
	playRound("scissor", computerPlay());
}


//computer choice
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


// function for playing a single round of the game
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
	const winner = document.querySelector("#winner");

	if (computerSelection == playerSelection) {
		winner.innerText = "Same selectin hence a Draw";
		playerScore += 0;
		computerScore += 0;
	} else if (computerSelection == "rock" & playerSelection == "paper") {
		winner.innerText = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
		playerScore += 1;
	} else if (computerSelection == "rock" & playerSelection == "scissor") {
		winner.innerText = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
		computerScore += 1;;
	} else if (computerSelection == "paper" & playerSelection == "scissor") {
		winner.innerText = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
		playerScore += 1;
	} else if (computerSelection == "paper" & playerSelection == "rock") {
		winner.innerText = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
		computerScore += 1;
	} else if (computerSelection == "scissor" & playerSelection == "rock") {
		winner.innerText = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
		playerScore += 1;
	} else if (computerSelection == "scissor" & playerSelection == "paper") {
		winner.innerText = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
		computerScore += 1;
	}

	updateScore();
	
	if (playerScore == 5 || computerScore == 5) {
		if (playerScore == 5) {
			winner.innerText = `Congratulation! You  won this game with a score of : ${playerScore + " - " + computerScore}`;
		} else {
			winner.innerText = `You lost this game with the computer with a score of : ${playerScore + " - " + computerScore}`;
		}
		computerScore = 0;
		playerScore = 0;
		const btns = document.querySelectorAll(".btn");
		
		btns.forEach((btn) => {
			btn.addEventListener('click',() => {location.reload();});
		});
	
	}
	const selection = document.querySelector("#selection");
	
	selection.innerText = `You chose ${playerSelection.toUpperCase()} while computer chose ${computerSelection.toUpperCase()}`;

}

//function to update score in screen
function updateScore() {
	const player = document.querySelector("#player-score");
	player.innerText = playerScore;
	const computer = document.querySelector("#computer-score");
	computer.innerText = computerScore;
}

const reload = document.querySelector("#refresh");
reload.addEventListener('click', () => { location.reload(); });