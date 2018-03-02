function keyPressed() {
  if (keyCode == UP_ARROW) {
    slideUp();
    combineUp();
    slideUp();
  } else if (keyCode == DOWN_ARROW) {
    slideDown();
    combineDown();
    slideDown();
  } else if (keyCode == LEFT_ARROW) {
    slideLeft();
    combineLeft();
    slideLeft();
  } else if (keyCode == RIGHT_ARROW) {
    slideRight();
    combineRight();
    slideRight();
  }
  addTiles();
  update();
}