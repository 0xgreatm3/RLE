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
  result += count + string[string.length - 1];
  return result;
}

function decompress(string) {
  if (!(typeof string === "string")) {
    throw new Error("Input must be a string");
  }
  let result = "";
  let count = "";
  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    if (char >= "0" && char <= "9") {
      count += char;
    } else {
      result += char.repeat(parseInt(count));
      count = "";
    }
  }
  return result;
}

let testString = compress("AAABBBCCCDDD");
// console.log(decompress(testString)); // Output: "AAAbbbiiiiiiiiiiiiiiiiiiiiiiii
console.log(testString);
