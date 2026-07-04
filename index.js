const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

const dices = {
  [PLAYER_ONE]: document.querySelector(".player.one .dice"),
  [PLAYER_TWO]: document.querySelector(".player.two .dice")
};

const visibleCells = {
  1: ["five"],
  2: ["three", "seven"],
  3: ["three", "five", "seven"],
  4: ["one", "three", "seven", "nine"],
  5: ["one", "three", "five", "seven", "nine"],
  6: ["one", "three", "four", "six", "seven", "nine"]
};

const title = document.querySelector("h1");

const diceNumberPlayerOne = randomDice();
const diceNumberPlayerTwo = randomDice();

drawDice(PLAYER_ONE, diceNumberPlayerOne);
drawDice(PLAYER_TWO, diceNumberPlayerTwo);

title.textContent = winnerMessage(diceNumberPlayerOne, diceNumberPlayerTwo);

function randomDice() {
  return Math.floor((Math.random() * 6)) + 1;
}

function drawDice(playerNumber, diceNumber) {
  visibleCells[diceNumber].forEach(className => {
    dices[playerNumber]
    .querySelector(`.${className}`)
    .classList.remove("invisible");
  });
}

function winnerMessage(diceNumberPlayerOne, diceNumberPlayerTwo) {
  if (diceNumberPlayerOne > diceNumberPlayerTwo) return "Player 1 Wins!";
  if (diceNumberPlayerOne < diceNumberPlayerTwo) return "Player 2 Wins!";
  return "Draw!";
}
