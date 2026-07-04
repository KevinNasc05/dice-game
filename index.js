let playerOne = 1;
let playerTwo = 2;

let diceNumberPlayerOne = Math.floor((Math.random() * 6)) + 1;
let diceNumberPlayerTwo = Math.floor((Math.random() * 6)) + 1;

drawDice(playerOne, diceNumberPlayerOne);
drawDice(playerTwo, diceNumberPlayerTwo);

let titlePage = document.querySelector("h1");

if (diceNumberPlayerOne > diceNumberPlayerTwo) {
  titlePage.textContent = "Player 1 Wins!";
} else if (diceNumberPlayerOne < diceNumberPlayerTwo) {
  titlePage.textContent = "Player 2 Wins!";
} else {
  titlePage.textContent = "Draw!";
}

function drawDice(playerNumber, diceNumber) {
  let playerCssSelector =
    playerNumber === playerOne
      ? ".player.one > .dice"
      : ".player.two > .dice";

  switch(diceNumber) {
    case 1:
      document.querySelector(playerCssSelector + "> .one").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .three").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .four").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .six").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .seven").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .nine").classList.add("invisible");
      break;
    case 2:
      document.querySelector(playerCssSelector + "> .one").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .four").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .five").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .six").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .nine").classList.add("invisible");
      break;
    case 3:
      document.querySelector(playerCssSelector + "> .one").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .four").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .six").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .nine").classList.add("invisible");
      break;
    case 4:
      document.querySelector(playerCssSelector + "> .four").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .five").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .six").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .eight").classList.add("invisible");
      break;
    case 5:
      document.querySelector(playerCssSelector + "> .four").classList.add("invisible");
      document.querySelector(playerCssSelector + "> .six").classList.add("invisible");
      break;
    case 6:
      document.querySelector(playerCssSelector + "> .five").classList.add("invisible");
  }
}
