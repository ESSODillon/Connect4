let contentWrapper = document.getElementById("wrapper");
let menu = document.getElementById("menu");
let BoardGame = new Board();
BoardGame.fillColumns();
BoardGame.fillRows();
let WinningStatus = new Winning(true, true);

function startGame() {
  TweenMax.to(menu, {
    duration: 0.5,
    x: window.innerWidth,
    alpha: 0,
    display: "none",
  });

  TweenMax.from(contentWrapper, {
    duration: 1.5,
    x: window.innerWidth,
    alpha: 0,
  });

  TweenMax.to(contentWrapper, {
    display: "block",
    alpha: 1,
  });
}

// Event Handlers
function handleCellMouseOver(e) {
  if (!WinningStatus.gameIsLive) return;
  const cell = e.target;
  const [rowIndex, colIndex] = WinningStatus.getCellLocation(cell);

  const topCell = BoardGame.topCells[colIndex];
  topCell.classList.add(WinningStatus.yellowIsNext ? "yellow" : "red");
}

function handleCellMouseOut(e) {
  const cell = e.target;
  const [rowIndex, colIndex] = WinningStatus.getCellLocation(cell);
  WinningStatus.clearColorFromTop(BoardGame.topCells, colIndex);
}

function handleCellClick(e) {
  if (!WinningStatus.gameIsLive) return;
  const cell = e.target;
  const [rowIndex, colIndex] = WinningStatus.getCellLocation(cell);

  const openCell = WinningStatus.getFirstOpenCellForColumn(
    BoardGame.columns,
    colIndex
  );

  if (!openCell) return;

  openCell.classList.add(WinningStatus.yellowIsNext ? "yellow" : "red");
  WinningStatus.checkStatusOfGame(BoardGame.rows, openCell);

  WinningStatus.yellowIsNext = !WinningStatus.yellowIsNext;
  WinningStatus.clearColorFromTop(BoardGame.topCells, colIndex);
  if (WinningStatus.gameIsLive) {
    const topCell = BoardGame.topCells[colIndex];
    topCell.classList.add(WinningStatus.yellowIsNext ? "yellow" : "red");
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

WinningStatus.resetButton.addEventListener("click", () => {
  for (const row of BoardGame.rows) {
    for (const cell of row) {
      cell.classList.remove("red");
      cell.classList.remove("yellow");
      cell.classList.remove("win");
    }
  }

  WinningStatus.gameIsLive = true;
  WinningStatus.yellowIsNext = true;
  WinningStatus.statusSpan.textContent = "";
});
