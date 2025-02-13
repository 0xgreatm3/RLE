// The compress() function
function compress(string) {
  if (!(typeof string === "string")) {
    throw new Error("Input must be a string");
  }

  let result = "";
  let count = 1;
  for (let index = 1; index < string.length; index++) {
    const char = string[index];
    const prevChar = string[index - 1];
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || // Uppercase
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) // Lowercase a-z
    ) {
      if (char === prevChar) {
        count++;
      } else {
        result += count + prevChar;
        count = 1;
      }
    }
  }
  return result;
}

// The decompress() function
function decompress(string) {}

let testString = compress("AAAbbb909099");
console.log(testString);
