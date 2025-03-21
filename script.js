let humanScore = 0
let computerScore = 0
let gameIsDone = false

let buttonsContainer = document.querySelector("#buttons-container")
let resultsContainer = document.querySelector("#results-container")
let scoresText = document.querySelectorAll(".score")

buttonsContainer.addEventListener("click", (e) => {
    let element = e.target
    if (element.classList.contains('choice')) {
        if (gameIsDone) {
            setTimeout(() => {
                updateScores(true)
                clearResult()
            }, 0)
            gameIsDone = false
        }
        playRound(element.textContent, getComputerChoice())
    }
})

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

    updateScores()

    if (humanScore === 5 || computerScore === 5) {
        announceWinner(humanScore, computerScore)
        gameIsDone = true
    }
}

function showResult(option, computerChoice, humanChoice) {
    let resultText = document.createElement("p")
    resultText.textContent = 
        option === 'draw' ? `Draw, ${computerChoice} doesn't beat ${humanChoice}` :
        option === 'win' ? `You win, ${humanChoice} beats ${computerChoice}` :
        `You lose, ${computerChoice} beats ${humanChoice}`
    resultsContainer.appendChild(resultText)
}

function announceWinner(humanScore, computerScore) {
    alert(
        (humanScore > computerScore) ? "You win the game!" 
        : (computerScore > humanScore) ? "You lose the game!"
        : "Nobody wins. It's a draw."
    )
}

function clearResult() {
    resultsContainer.replaceChildren()
}

function updateScores(reset = false) {
    if (reset) {
        scoresText[0].textContent = 0
        scoresText[1].textContent = 0
    } else {
        scoresText[0].textContent = computerScore
        scoresText[1].textContent = humanScore
    }
}