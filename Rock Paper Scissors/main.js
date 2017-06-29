var personChoose = prompt('Do you choose Rock, Paper or Scissors');
var computerChoose = (Math.random()*10);

if (computerChoose <= 3.3) {
  computerChoose = 'rock';
  console.log('rock');
} else if (computerChoose > 3.3 && computerChoose<= 6.6) {
  computerChoose = 'paper';
  console.log('paper');
} else {
  computerChoose = 'scissors';
  console.log('scissors');
}

function compareRock(person1, computer1) {
  if (person1 === computer1) {
    return 'It\'s a tie';
  } else if (person1 === 'rock') {
    if (computer1 === 'paper') {
      return 'Machine wins';
    } else {
      return 'Human wins';
    }
  }
}
compareRock(personChoose, computerChoose);

function comparePaper(person2, computer2) {
  if (person2 === computer2) {
    return 'It\'s a tie';
  } else if (person2 === 'paper') {
    if (computer2 === 'scissors') {
      return 'Machine wins';
  } else {
    return 'Human wins';
    }
  }
}
comparePaper(personChoose, computerChoose);

function compareScissors(person3, computer3) {
  if (person3 === computer3) {
    return 'It\'s a tie';
  } else if (person3 === 'scissors') {
    if (computer3 === 'rock') {
      return 'Machine wins';
    } else {
      return 'Human wins';
    }
  }
}
compareScissors(personChoose, computerChoose);
