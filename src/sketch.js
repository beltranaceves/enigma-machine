let enigmaMachine;

function setup() {
  var ETW = modelToRotor(models["ETW-K"]);
  var UKW = modelToRotor(models["UKW-K"]);
  var rotorIII = modelToRotor(models["III-W"]);
  var rotorII = modelToRotor(models["II-W"]);
  var rotorI = modelToRotor(models["I-W"]);
  var rotors = [rotorI, rotorII, rotorIII];
  
  var plugboard = new Plugboard("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  enigmaMachine = new EnigmaMachine(rotors, ETW, UKW, plugboard);
}

function draw() {
  // enigmaMachine.render();
}

function keyPressed() {
  var encryptedKey = enigmaMachine.encrypt(key);
  console.log(key.toUpperCase(), encryptedKey);
}
