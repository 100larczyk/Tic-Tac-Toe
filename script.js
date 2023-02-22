const createGameZone = (() => {
  const gameBoardSpace = document.querySelector(".gameBoardSpace");
  const gameBoardArray = [];

  const rows = 3;
  const columns = 3;

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
        gameBoardArray[i][j] = createGameTile();
      }
    }
  };
  console.log(gameBoardArray);
  return { createGameBoardTiles, gameBoardArray };
})();

const Player = (name, mark) => {
  return {
    name,
    mark,
  };
};

const PlayerOne = Player("Player One", "X");
const PlayerTwo = Player("Player Two", "O");

const Game = (() => {
  createGameZone.createGameBoardTiles();

  let activePlayer = PlayerOne;

  createGameZone.gameBoardArray.forEach((row) => {
    row.forEach((tile) => {
      tile.addEventListener("click", (e) => {
        e.target.textContent = activePlayer.mark;
        activePlayer = activePlayer === PlayerOne ? PlayerTwo : PlayerOne;
      });
    });
  });
})();
