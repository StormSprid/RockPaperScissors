const choices = document.querySelectorAll('.choice');
const userChoiceEl = document.getElementById('user-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const outcomeEl = document.getElementById('outcome');


const funnyResponses = {
  win: [
    "You won! The computer is crying in the corner 😭",
    "Victory! Skynet is disappointed 🤖💔",
    "Epic win! You're a legend 🏆"
  ],
  lose: [
    "Oof... you lost 😅",
    "Computer is laughing at you! 🤖😂",
    "You lost, but you're still cool 🥲"
  ],
  draw: [
    "It's a draw! Great minds think alike ⚔️",
    "Draw... Wanna try again? ☕",
    "No winners, just legends 😎"
  ]
};


choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
  });
});


function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


function getResult(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'win';
  }
  return 'lose';
}


function displayResult(user, computer, result) {
  const emojiMap = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
  };

  userChoiceEl.textContent = `You chose: ${emojiMap[user]} ${user}`;
  computerChoiceEl.textContent = `Computer chose: ${emojiMap[computer]} ${computer}`;
  const phrase = getFunnyPhrase(result);
  outcomeEl.textContent = `Result: ${phrase}`;
}





function getFunnyPhrase(result) {
  const phrases = funnyResponses[result];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
