let enigmaMachine;
let litLetters = {};

function setup() {
  var ETW = modelToRotor(wikipediaModels["ETW-K"]);
  var UKW = modelToRotor(wikipediaModels["UKW-K"]);
  var rotorIII = modelToRotor(wikipediaModels["III-W"]);
  var rotorII = modelToRotor(wikipediaModels["II-W"]);
  var rotorI = modelToRotor(wikipediaModels["I-W"]);
  var rotors = [rotorI, rotorII, rotorIII];
  
  var plugboard = new Plugboard("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  enigmaMachine = new EnigmaMachine(rotors, ETW, UKW, plugboard);

  var myCanvas = createCanvas(windowWidth, windowHeight);// TODO: do this better wtf
  setupHtml(myCanvas);
}

function setupHtml(myCanvas) {
  myCanvas.parent('div2');
  populateSelects();
  window.addEventListener('resize', resizeEnigmaMachine);
  var form = document.querySelector('form');
  form.addEventListener('change', function() {
      alert('Hi!');
  });
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

function populateSelects() {
  
}