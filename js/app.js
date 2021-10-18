let BoardGame = new Board();
BoardGame.fillColumns();
BoardGame.fillRows();
let GameSettings = new Settings(true, true);
let WinningStatus = new Winning();

// Event Handlers
function handleCellMouseOver(e) {
  if (!GameSettings.gameIsLive) return;
  const cell = e.target;
  const [rowIndex, colIndex] = GameSettings.getCellLocation(cell);

  const topCell = BoardGame.topCells[colIndex];
  topCell.classList.add(GameSettings.yellowIsNext ? "yellow" : "red");
}

function handleCellMouseOut(e) {
  const cell = e.target;
  const [rowIndex, colIndex] = GameSettings.getCellLocation(cell);
  GameSettings.clearColorFromTop(BoardGame.topCells, colIndex);
}

function handleCellClick(e) {
  if (!GameSettings.gameIsLive) return;
  const cell = e.target;
  const [rowIndex, colIndex] = GameSettings.getCellLocation(cell);

  const openCell = GameSettings.getFirstOpenCellForColumn(
    BoardGame.columns,
    colIndex
  );

  if (!openCell) return;

  openCell.classList.add(GameSettings.yellowIsNext ? "yellow" : "red");
  WinningStatus.checkStatusOfGame(BoardGame.rows, openCell);

  GameSettings.yellowIsNext = !GameSettings.yellowIsNext;
  GameSettings.clearColorFromTop(colIndex);
  if (GameSettings.gameIsLive) {
    const topCell = topCells[colIndex];
    topCell.classList.add(GameSettings.yellowIsNext ? "yellow" : "red");
  }
}

// Adding Event Listeners
for (const row of BoardGame.rows) {
  for (const cell of row) {
    cell.addEventListener("mouseover", handleCellMouseOver);
    cell.addEventListener("mouseout", handleCellMouseOut);
    cell.addEventListener("click", handleCellClick);
  }
}

GameSettings.resetButton.addEventListener("click", () => {
  for (const row of BoardGame.rows) {
    for (const cell of row) {
      cell.classList.remove("red");
      cell.classList.remove("yellow");
      cell.classList.remove("win");
    }
  }
  GameSettings.gameIsLive = true;
  GameSettings.yellowIsNext = true;
  GameSettings.statusSpan.textContent = "";
});
