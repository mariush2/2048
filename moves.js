function removeCol(i) {
  let s = "";

  for (let j = 0; j < board.length; j++) {
    if (board[i][j].value != 0) {
      s += board[i][j].value;
    }
  }

  return s;
}

function removeRow(i) {
  let s = "";

  for (let j = 0; j < board.length; j++) {
    if (board[j][i].value != 0) {
      s += board[j][i].value;
    }
  }

  return s;
}

function slideUp() {
  let len = 4;
  for (let i = 0; i < board.length; i++) {
    s = removeCol(i);
    while (s.length < len) {
      s = s + "0";
    }
    for (let j = 0; j < board.length; j++) {
      board[i][j].value = int(s[j]);
    }
  }
}

function slideDown() {
  let len = 4;
  for (let i = 0; i < board.length; i++) {
    s = removeCol(i);
    while (s.length < len) {
      s = "0" + s;
    }
    for (let j = 0; j < board.length; j++) {
      board[i][j].value = int(s[j]);
    }
  }
}

function slideLeft() {
  let len = 4;
  for (let i = 0; i < board.length; i++) {
    s = removeRow(i);
    while (s.length < len) {
      s = s + "0";
    }
    for (let j = 0; j < board.length; j++) {
      board[j][i].value = int(s[j]);
    }
  }
}

function slideRight() {
  let len = 4;
  for (let i = 0; i < board.length; i++) {
    s = removeRow(i);
    while (s.length < len) {
      s = "0" + s;
    }
    for (let j = 0; j < board.length; j++) {
      board[j][i].value = int(s[j]);
    }
  }
}

function combineUp() {
  for (let i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length - 1; j++) {
      if (board[i][j].value == board[i][j + 1].value) {
        //Combine those two
        board[i][j].value = board[i][j].value * 2;
        board[i][j + 1].value = 0;
      }
    }
  }
}

function combineDown() {
  for (let i = 0; i < board.length; i++) {
    for (var j = board.length - 1; j > 0; j--) {
      if (board[i][j].value == board[i][j - 1].value) {
        //Combine those two
        board[i][j].value = board[i][j].value * 2;
        board[i][j - 1].value = 0;
      }
    }
  }
}

function combineLeft() {
  for (let i = 0; i < board.length; i++) {
    for (var j = board.length - 1; j > 0; j--) {
      if (board[j][i].value == board[j - 1][i].value) {
        //Combine those two
        board[j][i].value = board[j][i].value * 2;
        board[j - 1][i].value = 0;
      }
    }
  }
}

function combineRight() {
  for (let i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length - 1; j++) {
      if (board[j][i].value == board[j + 1][i].value) {
        //Combine those two
        board[j][i].value = board[j][i].value * 2;
        board[j + 1][i].value = 0;
      }
    }
  }
}