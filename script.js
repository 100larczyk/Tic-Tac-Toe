const gameBoardSpace = document.querySelector(".gameBoardSpace");

const Gameboard = () => {
  const gameBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h", "j"];

  function createGameDiv() {
    const div = document.createElement("div");
    div.className = "gameDiv";
    gameBoardSpace.appendChild(div);
    return div;
  }

  const createGameBoardSpace = (gameBoardArray) => {
    gameBoardArray.forEach((letter) => createGameDiv(letter));
  };
  return { createGameBoardSpace };
};
Gameboard().createGameBoardSpace();

const Player = () => {};

const Game = () => {};

// gamebord object - place where the game runs
//player object - contains player's propertys: name, type of mark (x or o), score of player
//game flow object - Game:
