function encode(stringParam) {
  if (typeof stringParam !== "string") throw new Error("Input must be a string");
  if (stringParam.length === 0) return "";

  let result = "";
  let i = 0;

  while (i < stringParam.length) {
    let char = stringParam[i];
    
    if (/\d/.test(char)) {  
      // Handle numbers separately
      let num = "";
      while (i < stringParam.length && /\d/.test(stringParam[i])) {
        num += stringParam[i];
        i++;
      }
      result += `[${num}]`;
      continue; // Move to next character without extra increment
    }

    // Handle letters using RLE
    let count = 1;
    while (i + 1 < stringParam.length && stringParam[i + 1] === char) {
      count++;
      i++;
    }

    result += char + count;
    i++;  // Move to next character
  }

  return result;
} 


function decode(stringParam) {
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

let encodedString = encode("AA111BB2322ghdsGHGHGGGH3C24");
// let decompressedString = decompress(compressedString);

console.log(encodedString);
// console.log(decompressedString);
