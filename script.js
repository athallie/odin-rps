playGame()

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

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        let humanChoiceLC = humanChoice.toLowerCase()
        let losePrompt = (humanChoice, computerChoice) => `You lose, ${computerChoice} beats ${humanChoice}`
        let winPrompt = (humanChoice, computerChoice) => `You win, ${humanChoice} beats ${computerChoice}`
        let drawPrompt = (humanChoice, computerChoice) => `Draw, ${humanChoice} doesn't beat ${computerChoice}`
    
        switch(humanChoiceLC) {
            case "rock":
                switch(computerChoice) {
                    case "rock":
                        console.log(drawPrompt(humanChoiceLC, computerChoice))
                        break
                    case "paper":
                        console.log(losePrompt(humanChoiceLC, computerChoice))
                        computerScore++
                        break
                    case "scissors":
                        console.log(winPrompt(humanChoiceLC, computerChoice))
                        humanScore++
                        break
                }
            break
            case "paper":
                switch(computerChoice) {
                    case "rock":
                        console.log(winPrompt(humanChoiceLC, computerChoice))
                        humanScore++
                        break
                    case "paper":
                        console.log(drawPrompt(humanChoiceLC, computerChoice))
                        break
                    case "scissors":
                        console.log(losePrompt(humanChoiceLC, computerChoice))
                        computerScore++
                        break
                }
            break
            case "scissors":
                switch(computerChoice) {
                    case "rock":
                        console.log(losePrompt(humanChoiceLC, computerChoice))
                        computerScore++
                        break
                    case "paper":
                        console.log(winPrompt(humanChoiceLC, computerChoice))
                        humanScore++
                        break
                    case "scissors":
                        console.log(drawPrompt(humanChoiceLC, computerChoice))
                        break
                }
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log(
        (humanScore > computerScore) ? "You win the game!" 
        : (computerScore > humanScore) ? "You lose the game!"
        : "Nobody wins. It's a draw."
    )
}
