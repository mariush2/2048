function newBoard() {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
}

function addTiles() {
  let picked = 0;
  while (picked <= 1) {
    let i = floor(random(board.length - 1));
    let j = floor(random(board.length - 1));

    if (board[i][j].value == 0) {
      board[i][j].new();
      picked += 1;
    }
  }
}

function backgroundgrid() {
  for (let i = 0; i <= board.length; i++) {
    for (let j = 0; j <= board.length; j++) {
      fill("#ffffff");
      rect(size * i, size * j, size, size);
    }
  }
}