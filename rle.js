function compress(stringParam) {
  if (typeof stringParam !== "string") {
    throw new Error("Input must be a string");
  }

  if (stringParam.length === 0) return "";

  const regex = /[A-Za-z]/g;
  const string = (stringParam.match(regex) || []).join("");

  // In case the string is empty after removing non-alphabetic characters
  if (string.length === 0) return "";

  // In case the string has only one character
  if (string.length === 1) return string + "1";

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

  // Add the last character and its count
  result += string[string.length - 1] + count;

  return result;
}

function decompress(stringParam) {
  if (typeof stringParam !== "string") {
    throw new Error("Input must be a string");
  }

  if (stringParam.length === 0) return "";

  const isValidCompressed = (str) => /^([A-Za-z][1-9]\d*)+$/.test(str);

  const extractPairs = (str) => {
    if (!isValidCompressed(str)) {
      throw new Error("Invalid compressed string format");
    }

    return [...str.matchAll(/([a-zA-Z])(\d+)/g)];
  };

  const result = extractPairs(stringParam);

  return result.map((m) => m[1].repeat(Number(m[2]))).join("");
}

let compressedString = compress("ELEPHANT IS BIG");
let decompressedString = decompress(compressedString);

console.log(compressedString);
console.log(decompressedString);
