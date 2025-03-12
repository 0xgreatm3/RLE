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


function decode(encodedString) {
  if (typeof encodedString !== "string") throw new Error("Input must be a string");
  if (encodedString.length === 0) return "";

  let result = "";
  let i = 0;

  while (i < encodedString.length) {
    let char = encodedString[i];

    if (char === "[") {
      // Extract number inside brackets
      let num = "";
      i++; // Move past '['
      while (encodedString[i] !== "]" && i < encodedString.length) {
        num += encodedString[i];
        i++;
      }
      result += num; // Add raw number to result
    } else if (/[A-Za-z]/.test(char)) {
      // Extract the count of the letter
      let count = "";
      i++; // Move to the number
      while (/\d/.test(encodedString[i]) && i < encodedString.length) {
        count += encodedString[i];
        i++;
      }
      result += char.repeat(Number(count)); // Repeat the letter
      continue; // Avoid extra increment
    }

    i++;
  }

  return result;
}

let encodedString = encode("AA111BB");
let decodedString = decode(encodedString);

console.log(encodedString);
console.log(decodedString);
