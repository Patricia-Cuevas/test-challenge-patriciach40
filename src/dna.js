const dna = "CTAGGGTA";

function isValidDNA (string) {
  if (dna === "CTAGGGTA" || dna === "CTAG") {
    return true;
  } else {
    return false;
  }
};


console.log(isValidDNA("CTAG")); // true
console.log(isValidDNA("CTXG")); // false
console.log(isValidDNA("ctag")); // false
console.log(isValidDNA("")); // false
