let humanScore = 0
let computerScore = 0
let rounds = 0

function getComputerChoice() {
    let randomVal = Math.floor(Math.random() * 3)
    switch(randomVal) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return;
    }
}

function getHumanChoice() {
    return prompt("Rock/Paper/Scissors?")
}

function playRound(humanChoice, computerChoice) {

    let humanChoiceLC = humanChoice.toLowerCase()

    switch(humanChoiceLC) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    showResult('draw', computerChoice, humanChoiceLC)
                    break
                case "paper":
                    showResult('lose', computerChoice, humanChoiceLC)
                    computerScore++
                    break
                case "scissors":
                    showResult('win', computerChoice, humanChoiceLC)
                    humanScore++
                    break
            }
        break
        case "paper":
            switch(computerChoice) {
                case "rock":
                    showResult('win', computerChoice, humanChoiceLC)
                    humanScore++
                    break
                case "paper":
                    showResult('draw', computerChoice, humanChoiceLC)
                    break
                case "scissors":
                    showResult('lose', computerChoice, humanChoiceLC)
                    computerScore++
                    break
            }
        break
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    showResult('lose', computerChoice, humanChoiceLC)
                    computerScore++
                    break
                case "paper":
                    showResult('win', computerChoice, humanChoiceLC)
                    humanScore++
                    break
                case "scissors":
                    showResult('draw', computerChoice, humanChoiceLC)
                    break
            }
    }

    if (rounds === 5) {
        rounds = 0
        announceWinner(humanScore, computerScore)
    } else {
        rounds++
    }
}

function showResult(option, computerChoice, humanChoice) {
    console.log(
        option === 'draw' ? `Draw, ${computerChoice} doesn't beat ${humanChoice}` :
        option === 'win' ? `You win, ${humanChoice} beats ${computerChoice}` :
        `You lose, ${computerChoice} beats ${humanChoice}`
    )
}

function announceWinner(humanScore, computerScore) {
    console.log(
        (humanScore > computerScore) ? "You win the game!" 
        : (computerScore > humanScore) ? "You lose the game!"
        : "Nobody wins. It's a draw."
    )
}