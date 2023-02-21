const createGameZone = (() => {
  const gameBoardSpace = document.querySelector(".gameBoardSpace");

  const gameBoardArray = [];
  const rows = 3;
  const columns = 3;

  console.log(gameBoardArray);

  function createGameTile() {
    const tile = document.createElement("div");
    tile.className = "tile";
    gameBoardSpace.appendChild(tile);

    return tile;
  }
  const createGameBoardTiles = () => {
    for (let i = 0; i < rows; i++) {
      gameBoardArray[i] = [];
      for (let j = 0; j < columns; j++) {
        gameBoardArray[i][j] = 0;
        createGameTile();
      }
    }
  };

  return { createGameBoardTiles };
})();

const Player = (name, mark, points, e) => {
  return { name, mark, points };
};

let PlayerOne = Player("Player One", "x", 0);
let PlayerTwo = Player("Player Two", "o", 0);

const Game = (() => {
  createGameZone.createGameBoardTiles();
})();
