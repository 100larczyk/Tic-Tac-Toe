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
  // createGameZone.createGameBoardTiles();
  let activePlayer = PlayerOne;

  //uzupełnia pola gry wartością X lub O -  zaleznie od aktywnego gracza, zabezpiecza przezd kliknięcie więcej niż jeden raz w pole gry
  createGameZone.gameBoardArray.forEach((row, i) => {
    row.forEach((tile, j) => {
      tile.addEventListener("click", (e) => {
        if (e.target.textContent === "") {
          createGameZone.gameBoardArray[i].splice(j, 1, activePlayer.mark); //zastępuje wartość poszczególnych indeksów w gameboardArray wartością znacznika gracza
          e.target.textContent = activePlayer.mark;
          checkForWinner(array, i, j);
          activePlayer = activePlayer === PlayerOne ? PlayerTwo : PlayerOne;
          console.log(createGameZone.gameBoardArray);
        } else return;
      });
    });
  });
  const array = createGameZone.gameBoardArray;

  function areAllElementsSameInRow(array, i) {
    return array[i].every(function (element, index, array) {
      return element === array[0];
    });
  }

  function areAllElementsSameInColumn(array, j) {
    const firstElement = array[0][j];
    for (let i = 1; i < array.length; i++) {
      if (array[i][j] !== firstElement) {
        return false;
      }
    }
    return true;
  }

  function areAllElementSameInCross(array) {
    const firstElement = array[1][1];
    if (
      (array[0][0] === firstElement && array[2][2] === firstElement) ||
      (array[2][0] === firstElement && array[0][2] === firstElement)
    )
      return true;
    else return false;
  }

  function checkForWinner(array, i, j) {
    if (
      areAllElementsSameInRow(array, i) === true ||
      areAllElementsSameInColumn(array, j) === true ||
      areAllElementSameInCross(array) === true
    ) {
      console.log(`${activePlayer.name} wins!`);
    }
  }
})();
