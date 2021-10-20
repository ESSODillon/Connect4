class Board {
  // Constructor for all cells that aren't the top cells, the top cells, columns and rows
  constructor() {
    this.allCells = document.querySelectorAll(".cell:not(.row-top)");
    this.topCells = document.querySelectorAll(".cell.row-top");
    this.columns = [];
    this.rows = [];
  }

  // Cycles through every column and pushes them into an array
  fillColumns() {
    let column0;
    let column1;
    let column2;
    let column3;
    let column4;
    let column5;
    let column6;

    this.columns.push(
      (column0 = [
        this.allCells[35],
        this.allCells[28],
        this.allCells[21],
        this.allCells[14],
        this.allCells[7],
        this.allCells[0],
        this.topCells[0],
      ]),
      (column1 = [
        this.allCells[36],
        this.allCells[29],
        this.allCells[22],
        this.allCells[15],
        this.allCells[8],
        this.allCells[1],
        this.topCells[1],
      ]),
      (column2 = [
        this.allCells[37],
        this.allCells[30],
        this.allCells[23],
        this.allCells[16],
        this.allCells[9],
        this.allCells[2],
        this.topCells[2],
      ]),
      (column3 = [
        this.allCells[38],
        this.allCells[31],
        this.allCells[24],
        this.allCells[17],
        this.allCells[10],
        this.allCells[3],
        this.topCells[3],
      ]),
      (column4 = [
        this.allCells[39],
        this.allCells[32],
        this.allCells[25],
        this.allCells[18],
        this.allCells[11],
        this.allCells[4],
        this.topCells[4],
      ]),
      (column5 = [
        this.allCells[40],
        this.allCells[33],
        this.allCells[26],
        this.allCells[19],
        this.allCells[12],
        this.allCells[5],
        this.topCells[5],
      ]),
      (column6 = [
        this.allCells[41],
        this.allCells[34],
        this.allCells[27],
        this.allCells[20],
        this.allCells[13],
        this.allCells[6],
        this.topCells[6],
      ])
    );
  }

  // Cycles through every row and pushes them into an array. Top row HAS to go last in order for the program to work.
  fillRows() {
    let topRow;
    let row0;
    let row1;
    let row2;
    let row3;
    let row4;
    let row5;
    let row6;

    this.rows.push(
      (row0 = [
        this.allCells[0],
        this.allCells[1],
        this.allCells[2],
        this.allCells[3],
        this.allCells[4],
        this.allCells[5],
        this.allCells[6],
      ]),
      (row1 = [
        this.allCells[7],
        this.allCells[8],
        this.allCells[9],
        this.allCells[10],
        this.allCells[11],
        this.allCells[12],
        this.allCells[13],
      ]),
      (row2 = [
        this.allCells[14],
        this.allCells[15],
        this.allCells[16],
        this.allCells[17],
        this.allCells[18],
        this.allCells[19],
        this.allCells[20],
      ]),
      (row3 = [
        this.allCells[21],
        this.allCells[22],
        this.allCells[23],
        this.allCells[24],
        this.allCells[25],
        this.allCells[26],
        this.allCells[27],
      ]),
      (row4 = [
        this.allCells[28],
        this.allCells[29],
        this.allCells[30],
        this.allCells[31],
        this.allCells[32],
        this.allCells[33],
        this.allCells[34],
      ]),
      (row5 = [
        this.allCells[35],
        this.allCells[36],
        this.allCells[37],
        this.allCells[38],
        this.allCells[39],
        this.allCells[40],
        this.allCells[41],
      ]),
      (topRow = [
        this.topCells[0],
        this.topCells[1],
        this.topCells[2],
        this.topCells[3],
        this.topCells[4],
        this.topCells[5],
        this.topCells[6],
      ])
    );
  }
}
