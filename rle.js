function compress(string) {
  if (!(typeof string === "string")) {
    throw new Error("Input must be a string");
  }

  if (string.length === 0) {
    return "";
  }

  let result = "";
  let count = 1;
  for (let index = 1; index < string.length; index++) {
    const char = string[index];
    const prevChar = string[index - 1];
    if (char.match(/[a-zA-Z]/g)) {
      if (char === prevChar) {
        count++;
      } else {
        result += prevChar + count;
        count = 1;
      }
    } else {
      continue;
    }
  }
  result += string[string.length - 1] + count;
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

let testString = compress("AAABBBCCCDDD999GG");
console.log(testString);
