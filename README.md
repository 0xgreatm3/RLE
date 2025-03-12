# Run-Length Encoding (RLE) Compression

A simple JavaScript implementation of the Run-Length Encoding (RLE) algorithm. This program encodes and decodes strings by counting consecutive characters and representing them in a more compact form.

## Features
- **Encode**: Converts repeated characters into a count and character format (e.g., "AAAABBBCCDAA" → "A4B2C2D1A2").
- **Decode**: Reverts compressed strings back to their original form (e.g., "A4B2C2D1A2" → "AAAABBBCCDAA").

## Usage
1. Clone this repository to your local machine.
2. Create a `.html` file or use Node.js to run the script.
3. Use the functions `encode()` and `decode()` to test the compression and decompression of strings.

```js
// RLE.js
let string = encode("AA111BCC")
console.log(string) // Output: "A2[111]B1C2"

let decodedString = decode("A2[111]B1C2")
console.log(decodedString) // Output: "AA111BCC"
```

## Contributing
Feel free to fork this repository and make pull requests with improvements or bug fixes.
 
## Todo

- [x] ~~Currently, only letters are compressed. Future versions will handle numbers properly.~~
- [ ] Decide whether to compress special characters like `@`, `#`, `$`, `!`, or leave them unchanged.
- [ ] Add a setting to allow case-sensitive or case-insensitive compression.
- [ ] Improve efficiency when handling large text inputs.
- [ ] Create a simple webpage for users to input text and see real-time compression results.
- [ ] Extend the project to support text file compression and decompression.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.