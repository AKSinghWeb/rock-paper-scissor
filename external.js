function computerPlay(){

let computerSelection;

let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //Generates a Random number between 1 and 3

if (random == 1){
    computerSelection = "Rock"
} else if (random == 2){
    computerSelection = "Paper"
}else{
     computerSelection = "Scissor"
}

return(computerSelection);

}

