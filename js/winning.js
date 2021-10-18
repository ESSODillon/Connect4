class Winning extends Settings {
  constructor() {
    super();
  }

  checkWinningCells(cells) {
    if (cells.length < 4) return false;
    this.gameIsLive = false;
    for (const cell of cells) {
      cell.classList.add("win");
    }
    this.statusSpan.textContent = `${
      this.yellowIsNext ? "Yellow" : "Red"
    } has won!`;
    return true;
  }

  checkStatusOfGame(rows, cell) {
    const color = this.getColorOfCell(cell);
    if (!color) return;
    const [rowIndex, colIndex] = this.getCellLocation(cell);

    // Check horizontally
    let winningCells = [cell];
    let rowToCheck = rowIndex;
    let colToCheck = colIndex - 1;
    while (colToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        colToCheck--;
      } else {
        break;
      }
    }
    colToCheck = colIndex + 1;
    while (colToCheck <= 6) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        colToCheck++;
      } else {
        break;
      }
    }
    let isWinningCombo = this.checkWinningCells(winningCells);
    if (isWinningCombo) return;

    // Check vertically
    winningCells = [cell];
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex;
    while (rowToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex + 1;
    while (rowToCheck <= 5) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
      } else {
        break;
      }
    }
    isWinningCombo = this.checkWinningCells(winningCells);
    if (isWinningCombo) return;

    // Check diagonally /
    winningCells = [cell];
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck <= 5) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
        colToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
        colToCheck++;
      } else {
        break;
      }
    }
    isWinningCombo = this.checkWinningCells(winningCells);
    if (isWinningCombo) return;

    // Check diagonally \
    winningCells = [cell];
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
        colToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck <= 5) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (this.getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
        colToCheck++;
      } else {
        break;
      }
    }
    isWinningCombo = this.checkWinningCells(winningCells);
    if (isWinningCombo) return;

    // Check to see if we have a tie
    const rowsWithoutTop = rows.slice(0, 6);
    for (const row of rowsWithoutTop) {
      for (const cell of row) {
        const classList = this.getClassListArray(cell);
        if (!classList.includes("yellow") && !classList.includes("red")) {
          return;
        }
      }
    }
    this.gameIsLive = false;
    this.statusSpan.textContent = "Game is a tie!";
  }
}
