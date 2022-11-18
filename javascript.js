console.log('hi');

const getUserChoice = userInput  => { 
if ( userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors') {
  return userInput;
} else {
  console.log('Error.') ;
}
};


// getUserChoice TEST
console.log('-1-');
console.log('---getUserChoice TEST---');
console.log(getUserChoice('rock'));
console.log(getUserChoice('potato'));
console.log('-1-');


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// getComputeChoice TEST
console.log('-2-');
console.log('---getComputeChoice TEST---');
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log('-2-');

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Remis!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won!';
    } else {
      return 'The computer won!';
  }
}

if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You won!';
    } else {
      return 'The computer won!';
  }
}
}

// determineWinner TEST
console.log('-3-');
console.log('---determineWinner TEST---');
console.log(determineWinner('rock', 'scisiors')); // person won
console.log(determineWinner('rock', 'rock')); //remis 
console.log(determineWinner('paper', 'scisiors')); //comp won
console.log('-3-');
console.log();

console.log('-the final play-');
function playGame() {
const userChoice = getUserChoice('rock'); // <---- write your choice here
console.log('You have: ' + userChoice);
const computerChoice = getComputerChoice();
console.log('Computer have: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
}

playGame();