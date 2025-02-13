// The compress() function
function compress(string) {
  if (!(typeof string === "string")) {
    throw new Error("Input must be a string");
  }
  if (
    (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || // Uppercase A-Z
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) // Lowercase a-z
  ) {
    let result = "";
    let count = 1;
    for (let index = 1; index < string.length; index++) {
      const char = string[index];
      const prevChar = string[index - 1];
      if (char === prevChar) {
        count++;
      } else {
        result += count + prevChar;
        count = 1;
      }
    }
  }
}

// The decompress() function
function decompress(string) {}

// let testString = compress("AAAABBBBCCCCEEFFGHS");
// console.log(testString);
