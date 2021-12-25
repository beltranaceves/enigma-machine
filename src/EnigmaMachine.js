function EnigmaMachine(rotors, ETW, UKW, plugboard) {
  this.entryWheel = ETW;
  this.rotors = rotors; // List with rotors from left to right
  this.reflector = UKW;
  this.plugboard = plugboard;

  this.encrypt = function (input) {
    input = input.toUpperCase();
    if (abc.includes(input)) {
      var rotorTranslated = this.translateWithRotors(input);
      var plugboardTranslated = this.translateWithPlugboard(rotorTranslated);
      this.rotateRotors();
      return plugboardTranslated;
    }
  };

  this.translateWithRotors = function (input) {
    var CTI = input; // Current Transformed Input
    CTI = this.entryWheel.encryption[CTI];
    for (let rotor of this.rotors) {
      CTI = rotor.encrypt(CTI);
    }
    CTI = this.reflector.encryption[CTI];
    for (let i = 0; i < this.rotors.length; i++) {
      CTI = this.rotors[this.rotors.length - 1 - i].decrypt(CTI);
    }
    //TODO: Maybe findKeyByValue de ETW, revisar diagrama
    return CTI;
  };

  this.translateWithPlugboard = function (input) {
    var CTI = input; // Current Transformed Input
    CTI = this.plugboard.encryption[CTI];
    return CTI;
  };

  this.rotateRotors = function () {
    console.log("Starting Rotation of rotors", this.rotors);
    this.rotateRotor(this.rotors[0], 0);
    console.log("Finishing Rotation of rotors");
  };

  this.rotateRotor = function (rotor, i) {
    if (i < this.rotors.length && rotor.notches.includes(rotor.currentLetter)) {
      this.rotateRotor(this.rotors[i + 1], i + 1);
    }
    rotor.setNextLetter();
  };
}
