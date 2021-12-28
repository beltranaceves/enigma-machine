let enigmaMachine;
let litLetters = {};

function setup() {
  var ETW = modelToRotor(models["ETW-K"]);
  var UKW = modelToRotor(models["UKW-K"]);
  var rotorIII = modelToRotor(models["III-W"]);
  var rotorII = modelToRotor(models["II-W"]);
  var rotorI = modelToRotor(models["I-W"]);
  var rotors = [rotorI, rotorII, rotorIII];
  
  var plugboard = new Plugboard("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  enigmaMachine = new EnigmaMachine(rotors, ETW, UKW, plugboard);

  createCanvas(windowWidth, windowHeight);

  window.addEventListener('resize', resizeEnigmaMachine);
}

function draw() {
  background(10);
  enigmaMachine.render();
}

function keyPressed() {
  var encryptedKey = enigmaMachine.encrypt(key);
  if (encryptedKey != null) {
    enigmaMachine.toggleLetter(encryptedKey);
    litLetters[key.toUpperCase()] = encryptedKey;
  }
}

function keyReleased() {
  var litLetter = litLetters[key.toUpperCase()];
  if (litLetter) {
    enigmaMachine.toggleLetter(litLetter);
    delete litLetters[key.toUpperCase()];
  }
  if (Object.keys(litLetters) == 0) {
    resizeEnigmaMachine();
  }
}

function resizeEnigmaMachine() {
  enigmaMachine.resize();
}