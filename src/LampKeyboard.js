function LampKeyboard() {
  this.letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  this.firstRow = "QWERTZUIO";
  this.secondRow = "ASDFGHJK";
  this.thirdRow = "PYXCVBNML";
  this.lights = [];

  var divWidth = windowWidth;
  var divHeight = windowHeight;
  //TODO: take a look at this and find a better way to do it, maybe responsive?
  var offsetX = (divWidth / this.firstRow.length);
  for (const letter of this.firstRow) {
    let lightX = this.firstRow.indexOf(letter)* offsetX;
    let lightY = divHeight / 5;

    this.lights.push(new Light(lightX, lightY, letter));
  }

  offsetX = (divWidth / this.secondRow.length);
  for (const letter of this.secondRow) {
    let lightX = this.secondRow.indexOf(letter)* offsetX;
    let lightY = (divHeight / 5) * 2;

    this.lights.push(new Light(lightX, lightY, letter));
  }

  offsetX = (divWidth / this.thirdRow.length);
  for (const letter of this.thirdRow) {
    let lightX = this.thirdRow.indexOf(letter)* offsetX;
    let lightY = (divHeight / 5) * 3;

    this.lights.push(new Light(lightX, lightY, letter));
  }


  this.toggleLetter = function (letter) {
    var lamp;
    for (const light of this.lights) {
      if (light.letter == letter) {
        lamp = light;
        lamp.on = !lamp.on;
        break;
      }
    }
  };

  this.render = function () {
    for (const light of this.lights) {
      light.render();
    }
  };
}

class Light {
  constructor(x, y, letter) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.on = false;
  }

  render() {
    let onColor = color(252, 238, 83);

    if (this.on) {
      //fill(238, 242, 116);
      fill(onColor);
      ellipse(this.x, this.y, 75, 75);
      onColor.setAlpha(128);
      fill(onColor);
      ellipse(this.x, this.y, 100, 100);
    } else {
      fill(171, 173, 116);
      ellipse(this.x, this.y, 75, 75);
      ellipse(this.x, this.y, 100, 100);
    }

    if (this.on) {
      fill(0);
    } else {
      fill(50);
    }
    textSize(60);
    textAlign(CENTER);
    text(this.letter, this.x, this.y + 15);
  }
}
