class Settings {
  constructor(gameIsLive, yellowIsNext) {
    this.gameIsLive = gameIsLive;
    this.yellowIsNext = yellowIsNext;
    this.resetButton = document.querySelector(".reset");
    this.statusSpan = document.querySelector(".status");
  }

  getClassListArray(cell) {
    const classList = cell.classList;
    return [...classList];
  }

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

  clearColorFromTop(topCells, colIndex) {
    const topCell = topCells[colIndex];
    topCell.classList.remove("yellow");
    topCell.classList.remove("red");
  }

  getColorOfCell(cell) {
    const classList = this.getClassListArray(cell);
    if (classList.includes("yellow")) return "yellow";
    if (classList.includes("red")) return "red";
    return null;
  }
}
