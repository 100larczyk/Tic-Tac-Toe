const createGameZone = (() => {
  const gameBoardSpace = document.querySelector(".gameBoardSpace");
  const gameBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h", "j"];

  function createGameTile() {
    const div = document.createElement("div");
    div.className = "tile";
    gameBoardSpace.appendChild(div);
    return div;
  }

  const createGameBoardTiles = () => {
    gameBoardArray.forEach((letter) => createGameTile(letter));
  };
  return { createGameBoardTiles };
})();
createGameZone.createGameBoardTiles();

const Player = () => {};

const Game = () => {};

// gamebord object - place where the game runs
//player object - contains player's propertys: name, type of mark (x or o), score of player
//game flow object - Game:
