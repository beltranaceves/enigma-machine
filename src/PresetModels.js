const models = {
  "IC": {
    name: "IC",
    encryption: "DMTWSILRUYQNKFEJCAZBPGXOHV",
    date: "1924",
    model: "Commercial Enigma A, B",
    notches: []
  },
  "IIC": {
    name: "IIC",
    encryption: "HQZGPJTMOBLNCIFDYAWVEUSRKX",
    date: "1924",
    model: "Commercial Enigma A, B",
    notches: []
  },
  "IIIC": {
    name: "IIIC",
    encryption: "UQNTLSZFMREHDPXKIBVYGJCWOA",
    date: "1924",
    model: "Commercial Enigma A, B",
    notches: []
  },
  "I": {
    name: "I",
    encryption: "JGDQOXUSCAMIFRVTPNEWKBLZYH",
    date: "7 February 1941",
    model: "German Railway (Rocket)",
    notches: []
  },
  "II": {
    name: "II",
    encryption: "NTZPSFBOKMWRCJDIVLAEYUXHGQ",
    date: "7 February 1941",
    model: "German Railway (Rocket)",
    notches: []
  },
  "III": {
    name: "III",
    encryption: "JVIUBHTCDYAKEQZPOSGXNRMWFL",
    date: "7 February 1941",
    model: "German Railway (Rocket)",
    notches: []
  },
  "UKW": {
    name: "UKW",
    encryption: "QYHOGNECVPUZTFDJAXWMKISRBL",
    date: "7 February 1941",
    model: "German Railway (Rocket)",
    notches: []
  },
  "ETW": {
    name: "ETW",
    encryption: "QWERTZUIOASDFGHJKPYXCVBNML",
    date: "7 February 1941",
    model: "German Railway (Rocket)",
    notches: []
  },
  "I-K": {
    name: "I-K",
    encryption: "PEZUOHXSCVFMTBGLRINQJWAYDK",
    date: "February 1939",
    model: "Swiss K",
    notches: []
  },
  "II-K": {
    name: "II-K",
    encryption: "ZOUESYDKFWPCIQXHMVBLGNJRAT",
    date: "February 1939",
    model: "Swiss K",
    notches: []
  },
  "III-K": {
    name: "III-K",
    encryption: "EHRVXGAOBQUSIMZFLYNWKTPDJC",
    date: "February 1939",
    model: "Swiss K",
    notches: []
  },
  "UKW-K": {
    name: "UKW-K",
    encryption: "IMETCGFRAYSQBZXWLHKDVUPOJN",
    date: "February 1939",
    model: "Swiss K",
    notches: []
  },
  "ETW-K": {
    name: "ETW-K",
    encryption: "QWERTZUIOASDFGHJKPYXCVBNML",
    date: "February 1939",
    model: "Swiss K",
    notches: []
  },
  "I-W": {
    name: "I-W",
    encryption: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    date: "1930",
    model: "Enigma I",
    notches: ["Q"]
  },
  "II-W": {
    name: "II-W",
    encryption: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    date: "1930",
    model: "Enigma I",
    notches: ["E"]
  },
  "III-W": {
    name: "III-W",
    encryption: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    date: "1930",
    model: "Enigma I",
    notches: ["V"]
  },
  "IV-W": {
    name: "IV-W",
    encryption: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
    date: "December 1938",
    model: "M3 Army",
    notches: ["J"]
  },
  "V-W": {
    name: "V-W",
    encryption: "VZBRGITYUPSDNHLXAWMJQOFECK",
    date: "December 1938",
    model: "M3 Army",
    notches: ["Z"]
  },
  "VI-W": {
    name: "VI-W",
    encryption: "JPGVOUMFYQBENHZRDKASXLICTW",
    date: "1939",
    model: "M3 Army & M4 Naval (FEB 1942)",
    notches: ["Z", "M"]
  },
  "VII-W": {
    name: "VII-W",
    encryption: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
    date: "1939",
    model: "M3 Army & M4 Naval (FEB 1942)",
    notches: ["Z", "M"]
  },
  "VIII-W": {
    name: "VIII-W",
    encryption: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
    date: "1939",
    model: "M3 Army & M4 Naval (FEB 1942)",
    notches: ["Z", "M"]
  },
  "Beta": {
    name: "Beta",
    encryption: "LEYJVCNIXWPBQMDRTAKZGFUHOS",
    date: "Spring 1941",
    model: "M4 R2",
    notches: []
  },
  "Gamma": {
    name: "Gamma",
    encryption: "FSOKANUERHMBTIYCWLQPZXVGJD",
    date: "Spring 1941",
    model: "M4 R2",
    notches: []
  },
  "Reflector A": {
    name: "Reflector A",
    encryption: "EJMZALYXVBWFCRQUONTSPIKHGD",
    date: "",
    model: "",
    notches: []
  },
  "Reflector B": {
    name: "Reflector B",
    encryption: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    date: "",
    model: "",
    notches: []
  },
  "Reflector C": {
    name: "Reflector C",
    encryption: "FVPJIAOYEDRZXWGCTKUQSBNMHL",
    date: "",
    model: "",
    notches: []
  },
  "Reflector B Thin": {
    name: "Reflector B Thin",
    encryption: "ENKQAUYWJICOPBLMDXZVFTHRGS",
    date: "1940",
    model: "M4 R1 (M3 + Thin)",
    notches: []
  },
  "Reflector C Thin": {
    name: "Reflector C Thin",
    encryption: "RDOBJNTKVEHMLFCWZAXGYIPSUQ",
    date: "1940",
    model: "M4 R1 (M3 + Thin)",
    notches: []
  },
  "Reflector C Thin": {
    name: "Reflector C Thin",
    encryption: "RDOBJNTKVEHMLFCWZAXGYIPSUQ",
    date: "1940",
    model: "M4 R1 (M3 + Thin)",
    notches: []
  },
  "ETW-I": {
    name: "ETW-I",
    encryption: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    date: "",
    model: "Enigma I",
    notches: []
  }
}