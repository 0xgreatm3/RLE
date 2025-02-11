# Run-Length Encoding (RLE) Compression

A simple JavaScript implementation of the Run-Length Encoding (RLE) algorithm. This program compresses and decompresses strings by counting consecutive characters and representing them in a more compact form.

## Features
- **Compression**: Converts repeated characters into a count and character format (e.g., "AAAABBBCCDAA" → "4A3B2C1D2A").
- **Decompression**: Reverts compressed strings back to their original form (e.g., "4A3B2C1D2A" → "AAAABBBCCDAA").

## Usage
1. Clone this repository to your local machine.
2. Open the `index.html` or use Node.js to run the script.
3. Use the functions `compress()` and `decompress()` to test the compression and decompression of strings.

## Contributing
Feel free to fork this repository and make pull requests with improvements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.