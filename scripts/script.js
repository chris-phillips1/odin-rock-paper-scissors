function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)].name;
}

function getUserChoice(choices) {
    let keepRunning = true;
    let userChoice = '';

    while (keepRunning) {
        userChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

        choices.forEach(choice => {
            if (choice.name === userChoice) {
                keepRunning = false;
            }
        })
    }
    return userChoice;
}

function playRound(userChoice, computerChoice, choices) {
    let result = '';
    let userChoiceObject = choices.find(choice => choice.name === userChoice);
    let computerChoiceObject = choices.find(choice => choice.name === computerChoice);

    if (userChoiceObject.name === computerChoiceObject.name) {
        SCORE.NONE++;
        result = 'It is a tie.';
    } else if (userChoiceObject.name === computerChoiceObject.weakness) {
        SCORE.USER++;
        result = `The player wins! ${userChoiceObject.name} beats ${computerChoiceObject.name}.`;
    } else if (userChoiceObject.name === computerChoiceObject.advantage) {
        SCORE.COMPUTER++;
        result = `The computer wins! ${computerChoiceObject.name} beats ${userChoiceObject.name}.`;
    }

    return result;
}

function playGame(choices) {
    for (let i = 0; i < 5; i++) {
        let userChoice = getUserChoice(choices);
        let computerChoice = getComputerChoice(choices);
        console.log(playRound(userChoice, computerChoice, choices));
    }

    if (SCORE.USER > SCORE.COMPUTER) {
        console.log(`The player wins ${SCORE.USER}-${SCORE.COMPUTER}-${SCORE.NONE}.`);
    } else if (SCORE.COMPUTER > SCORE.USER) {
        console.log(`The computer wins ${SCORE.COMPUTER}-${SCORE.USER}-${SCORE.NONE}.`);
    } else {
        console.log('It is a tie.');
    }
}

let SCORE = {
    NONE: 0,
    USER: 0,
    COMPUTER: 0
};

let choices = [
    {name: 'rock', advantage: 'scissors', weakness: 'paper'}, 
    {name: 'paper', advantage: 'rock', weakness: 'scissors'}, 
    {name: 'scissors', advantage: 'paper', weakness: 'rock'}
];

playGame(choices);
