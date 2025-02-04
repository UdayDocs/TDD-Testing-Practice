const shiftChar = (char, shift) => {
    const code = char.charCodeAt(0);
    // Handle lowercase
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    // Handle uppercase
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Non-alphabet characters
    return char;
  };
  
  export default (str, shift) => 
    [...str].map((char) => shiftChar(char, shift)).join('');