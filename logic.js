const choices = document.querySelectorAll('.choice');
const userChoiceEl = document.getElementById('user-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const outcomeEl = document.getElementById('outcome');

// Fun responses based on outcome
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

// Add event listeners to each button
choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
  });
});

// Random computer choice
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Determine win/lose/draw
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

// Update the UI with results and a funny message
function displayResult(user, computer, result) {
  const emojiMap = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
  };

  userChoiceEl.textContent = `You chose: ${emojiMap[user]} ${capitalize(user)}`;
  computerChoiceEl.textContent = `Computer chose: ${emojiMap[computer]} ${capitalize(computer)}`;
  const phrase = getFunnyPhrase(result);
  outcomeEl.textContent = `Result: ${phrase}`;
}

// Capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Get a random funny phrase based on result
function getFunnyPhrase(result) {
  const phrases = funnyResponses[result];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
