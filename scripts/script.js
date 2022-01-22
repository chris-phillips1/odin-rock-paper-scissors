function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice(choiceName, choices) {
    return choices.find(choice => choice.name === choiceName);
}

function playRound(userChoice, computerChoice) {
    let result = '';

    if (userChoice.name === computerChoice.name) {
        result = 'It is a tie.';
    } else if (userChoice.name === computerChoice.weakness) {
        SCORE.USER++;
        result = `The player wins! ${userChoice.name} beats ${computerChoice.name}.`;
    } else if (userChoice.name === computerChoice.advantage) {
        SCORE.COMPUTER++;
        result = `The computer wins! ${computerChoice.name} beats ${userChoice.name}.`;
    }

    if (SCORE.USER >= 5 || SCORE.COMPUTER >= 5) {
        removeAllChildren(resultsDiv);
        scoreDiv.textContent = '0-0';

        if (SCORE.USER >= 5) {
            resultsDiv.textContent = `The player wins the previous set! ${SCORE.USER}-${SCORE.COMPUTER}.`;
        } else {
            resultsDiv.textContent = `The computer wins the previous set! ${SCORE.COMPUTER}-${SCORE.USER}`;
        }

        SCORE.USER = 0;
        SCORE.COMPUTER = 0;
    }

    scoreDiv.textContent = `Player: ${SCORE.USER} Computer: ${SCORE.COMPUTER}`;

    return result;
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}  

let SCORE = {
    USER: 0,
    COMPUTER: 0
};

let choices = [
    {name: 'rock', advantage: 'scissors', weakness: 'paper'}, 
    {name: 'paper', advantage: 'rock', weakness: 'scissors'}, 
    {name: 'scissors', advantage: 'paper', weakness: 'rock'}
];

const scoreDiv = document.querySelector('.running-score');
const resultsDiv = document.querySelector('.results-display');

const rockButton = document.querySelector('.rock-btn');
const paperButton = document.querySelector('.paper-btn');
const scissorsButton = document.querySelector('.scissors-btn');

rockButton.addEventListener('click', () => {
    const resultPara = document.createElement('p'); 
    resultPara.textContent = playRound(getUserChoice('rock', choices), getComputerChoice(choices));
    resultsDiv.appendChild(resultPara);
});

paperButton.addEventListener('click', () => {
    const resultPara = document.createElement('p'); 
    resultPara.textContent = playRound(getUserChoice('paper', choices), getComputerChoice(choices));
    resultsDiv.appendChild(resultPara);
});

scissorsButton.addEventListener('click', () => {
    const resultPara = document.createElement('p'); 
    resultPara.textContent = playRound(getUserChoice('scissors', choices), getComputerChoice(choices));
    resultsDiv.appendChild(resultPara);
});