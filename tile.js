let size = 500 / 4;
let konst = 5;
let colors = {
  "2": "#ffd600",
  "4": "#ff8a00",
  "8": "#00baff",
  "16": "#0066ff",
  "32": "#8700ff",
  "64": "#eb00ff",
  "128": "#00ff47",
  "256": "#a6ff00",
  "512": "#ff4500",
  "1024": "#de2929",
  "2048": "#ff007a"
}

let texts = {
  "2": 64,
  "4": 64,
  "8": 64,
  "16": 32,
  "32": 32,
  "64": 32,
  "128": 16,
  "256": 16,
  "512": 16,
  "1024": 8,
  "2048": 8
}

function Tile(i, j) {
  this.value = 0;
  this.pos = [size * i, size * j];

  this.render = function() {
    if (this.value > 0) {
      fill(colors[String(this.value)]);
      rect(this.pos[0] + konst, this.pos[1] + konst, size - 2 * konst, size - 2 * konst);
      let textsize = texts[String(this.value)];
      textSize(textsize);
      fill("#000000");
      text(String(this.value), this.pos[0] + (size / 2) - textsize / 4, this.pos[1] + (size / 2) + textsize / 4 + konst);
    }
  }

  this.new = function() {
    this.value = random() >= 0.8 ? 4 : 2;
  }


}