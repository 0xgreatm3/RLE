// The compress() function
function compress(string) {
  let result = "";
  if (!typeof string === "string") {
    throw new Error("Input must be a string");
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      debugger;
      result += string[i];
    }
  }
}

// The decompress() function
function decompress(string) {}
