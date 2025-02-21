function compress(stringParam) {
  if (!(typeof stringParam === "string")) {
    throw new Error("Input must be a string");
  }

  if (stringParam.length === 0) {
    return "";
  }

  const regex = /[A-Za-z]/g;
  const string = (stringParam.match(regex) || []).join("");

  // In case the string is empty after removing non-alphabetic characters
  if (string.length === 0) {
    return "";
  }

  // In case the string has only one character
  if (string.length === 1) {
    return string + "1";
  }

  let result = "";
  let count = 1;
  for (let index = 1; index < string.length; index++) {
    const char = string[index];
    const prevChar = string[index - 1];
    if (char === prevChar) {
      count++;
    } else {
      result += prevChar + count;
      count = 1;
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

let testString = compress("343");
console.log(testString);
