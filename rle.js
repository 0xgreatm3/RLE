// The compress() function
function compress(string) {
  let resultObj = {};
  if (!(typeof string === "string")) {
    throw new Error("Input must be a string");
  }

  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || // Uppercase A-Z
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) // Lowercase a-z
    ) {
      if (resultObj[char]) {
        resultObj[char]++;
      }

      resultObj[char]++;
    }
  }

  return resultObj;
}

// The decompress() function
function decompress(string) {}

let testString = compress("AAAAABBB!CCCC3333");
console.log(testString);
