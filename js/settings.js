class Settings {
  // Constructor for the properties of gameIsLive, in other words "is the game currently active, or finished." Reset button from index.html, and status span for displaying who won after the game concludes.
  constructor(gameIsLive, yellowIsNext) {
    this.gameIsLive = gameIsLive;
    this.yellowIsNext = yellowIsNext;
    this.resetButton = document.querySelector(".reset");
    this.statusSpan = document.querySelector(".status");
  }

  // Returns a spread operator for the cells class list
  getClassListArray(cell) {
    const classList = cell.classList;
    return [...classList];
  }

  // Returns the row number AND the column number for a cell
  getCellLocation(cell) {
    let classList = this.getClassListArray(cell);

    const rowClass = classList.find((className) => className.includes("row"));
    const colClass = classList.find((className) => className.includes("col"));
    const rowIndex = rowClass[4];
    const colIndex = colClass[4];
    const rowNumber = parseInt(rowIndex, 10);
    const colNumber = parseInt(colIndex, 10);

    return [rowNumber, colNumber];
  }

  // Finds the first open cell to color the game piece with, depending on which column you clicked
  getFirstOpenCellForColumn(columns, colIndex) {
    const column = columns[colIndex];
    const columnWithoutTop = column.slice(0, 6);

    for (const cell of columnWithoutTop) {
      const classList = this.getClassListArray(cell);
      if (!classList.includes("yellow") && !classList.includes("red")) {
        return cell;
      }
    }

    return null;
  }

  // Clears the color from the topRow after you've clicked it
  clearColorFromTop(topCells, colIndex) {
    const topCell = topCells[colIndex];
    topCell.classList.remove("yellow");
    topCell.classList.remove("red");
  }

  // Gets color of the current cell, super useful for win conditions later on
  getColorOfCell(cell) {
    const classList = this.getClassListArray(cell);
    if (classList.includes("yellow")) {
      return "yellow";
    }
    if (classList.includes("red")) {
      return "red";
    }

    return null;
  }
}
