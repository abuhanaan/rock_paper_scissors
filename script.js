function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    let compChoice
    let randomNum = Math.floor(Math.random() * choices.length)
    compChoice = choices[randomNum]

    return compChoice
}

// getComputerChoice()

function playRound(playerSelection, compSelection) {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    function makeSelection() {
        playerChoice = prompt("Please make a selection")
        return playerChoice
    }
    playerSelection = makeSelection()
    playerSelection = playerSelection.toUpperCase()
    if (!(choices.includes(playerSelection))) {
        alert("Please select any of these options: Rock - Paper - Scissors")
        return
    }
    compSelection = getComputerChoice()
    console.log(`you select ${playerSelection} and comuter selects ${compSelection}`)
    if ((compSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
        (compSelection == 'PAPER' && playerSelection == 'ROCK') ||
        (compSelection == 'ROCK' && playerSelection == 'SCISSORS')) {
        
        return `You lose! ${compSelection} beats ${playerSelection}`
    }
    else if (compSelection == playerSelection) {
        return `We have a tie, ${compSelection} matches ${playerSelection}`
    }
    else {
        return `You win! ${playerSelection} beats ${compSelection}`
    }
}

function game() {
    let playerScore = 0
    let compScore = 0
    for (var i = 0; i < 5; i++) {
        let result = playRound()
        if (result.includes('lose')) {
            compScore += 1
            console.log(`Computer beats player`)
            console.log(`#################`)
        }
        if (result.includes('win')) {
            playerScore += 1
            console.log(`player beats computer`)
            console.log(`#################`)
        }
        if (result.includes('tie')) {
            console.log(`No winner, we have a tie`)
            console.log(`#################`)
        }
    }
    if (playerScore > compScore) {
        console.log(`You win!, you score ${playerScore} while computer score ${compScore}`)
    } else if (playerScore == compScore) {
        console.log(`We have a draw!, you score ${playerScore} and computer score ${compScore}`)
    }
    else {
        console.log(`You lose!, you score ${playerScore} while computer score ${compScore}`)
    }
}

game()
