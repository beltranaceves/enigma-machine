const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function modelToRotor(model) {
  var name = model.name;
  var encryption = model.encryption;
  var date = model.date;
  var models = model.model;
  var notches = model.notches;
  return new Rotor(name, encryption, date, model, "A", notches);
}

function stringToEncryption(encryption) {
  var encryptionDict = {};
  for (let i = 0; i < abc.length; i++) {
    encryptionDict[abc[i]] = encryption[i];
  }
  return encryptionDict;
}

function Rotor(name, encryption, date, model, initialLetter, notches) {
  // It works as rotor, ETW and UKW

  this.name = name;
  this.encryption = stringToEncryption(encryption);
  this.date = date;
  this.currentLetter = initialLetter;
  this.notches = notches;

  this.encrypt = function (input) {
    var offset =
      (abc.indexOf(this.currentLetter) + abc.indexOf(input)) % abc.length;
    var encryptedInput = this.encryption[abc[offset]];
    return encryptedInput;
  };

  this.decrypt = function (input) {
    var offset =
      (abc.indexOf(this.currentLetter) + abc.indexOf(input)) % abc.length;
    var decryptedInput = getKeyByValue(this.encryption, abc[offset]);
    return decryptedInput;
  };

  this.setNextLetter = function () {
    var offset = (abc.indexOf(this.currentLetter) + 1) % abc.length;
    var nextLetter = abc[offset];
    this.currentLetter = nextLetter;
  };
}
