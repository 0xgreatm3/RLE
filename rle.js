// The compress() function
function compress(string) {
  let resultObj = {};
  if (!(typeof string === "string")) {
    throw new Error("Input must be a string");
  }

  for (let index = 0; index < string.length; index++) {
    const char = string[index]
    if(resultObj[char]) {
        resultObj[char]++
    }

    resultObj[char]++
  }

  return resultObj;
}

// The decompress() function
function decompress(string) {}

let testString = compress("AAAAABBB")
console.log(testString)