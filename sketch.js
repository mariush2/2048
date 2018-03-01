let w, h;
let board = newBoard();

function setup() {
  w = 500;
  h = 500;

  createCanvas(w, h);
  background(255);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = new Tile(i, j);
    }
  }
  addTiles();
  update();
}

function update() {
  backgroundgrid();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j].render();
    }
  }
}