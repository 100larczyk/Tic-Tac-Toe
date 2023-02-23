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

  //uzupełnia pola gry wartością X lub O -  zaleznie od aktywnego gracza, zabezpiecza przezd kliknięcie więcej niż jeden raz w pole gry
  createGameZone.gameBoardArray.forEach((row, i) => {
    row.forEach((tile, j) => {
      tile.addEventListener("click", (e) => {
        if (e.target.textContent === "") {
          createGameZone.gameBoardArray[i].splice(j, 1, activePlayer.mark); //zastępuje wartość poszczególnych indeksów w gameboardArray wartością znacznika gracza
          e.target.textContent = activePlayer.mark;
          activePlayer = activePlayer === PlayerOne ? PlayerTwo : PlayerOne;
          console.log(createGameZone.gameBoardArray);
        } else return;
      });
    });
  });
})();
