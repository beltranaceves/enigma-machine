function LampKeyboard() {
  this.letters = "qwertyuiopasdfghjklzxcvbnm";
  this.lights = [];

  var divWidth = document.querySelector('body').clientWidth;
  var divHeight = document.querySelector('body').clientHeight;
  //TODO: take a look at this and find a better way to do it, maybe responsive?
  for (let i = 0; i < this.letters.length; i++) {
    const xMult = divWidth / 13;
    let lightX = i <= 12 ? i * xMult + 75 : (i - 13) * xMult + 75;
    let lightY = i <= 12 ? 150 : 250;

    this.lights.push(new Light(lightX, lightY, this.letters[i]));

    // let plugX = i <= 12 ? width * 0.85 : width * 0.95;
    // let plugY = i <= 12 ? 400 + i * 30 : 400 + (i - 13) * 30;
    // plugLetters[plugLetters.length] = new PlugLetter(letters[i], plugX, plugY);
  }

  this.render = function () {
      for (const light of this.lights) {
        light.render();
      }
  }
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

    if (!this.on) {
      fill(171, 173, 116);
      ellipse(this.x, this.y, 75, 75);
    } else {
      //fill(238, 242, 116);
      fill(onColor);
      ellipse(this.x, this.y, 75, 75);
      onColor.setAlpha(128);
      fill(onColor);
      ellipse(this.x, this.y, 100, 100);
    }

    if (!this.on) {
      fill(50);
    } else {
      fill(0);
    }
    textSize(60);
    textAlign(CENTER);
    text(this.letter, this.x, this.y + 15);
  }
}
