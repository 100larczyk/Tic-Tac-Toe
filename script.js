const createGameZone = (() => {
  const gameBoardSpace = document.querySelector(".gameBoardSpace");
  const gameBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h", "j"];

  function createGameTile() {
    const tile = document.createElement("div");
    tile.className = "tile";
    gameBoardSpace.appendChild(tile);
    tile.addEventListener("click", (e) => (e.target.textContent = "X"));
    return tile;
  }

  const createGameBoardTiles = () => {
    gameBoardArray.forEach((letter) => createGameTile(letter));
  };
  return { createGameBoardTiles };
})();

const Player = (name, mark) => {
  return { name, mark, points };
};

const Game = (() => {
  createGameZone.createGameBoardTiles();
})();

//player object - contains player's propertys: name, type of mark (x or o), score of player
//game flow object - Game:
