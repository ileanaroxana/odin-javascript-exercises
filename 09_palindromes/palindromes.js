const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');
      
    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;

    // const arr = str.toLowerCase().split('');
    // const reversed = str.loLowerCase().split('').reverse();
    // console.log(arr);
    // console.log(reversed);
    // return arr.length == reversed.length &&
    //  arr.every((value, index) => value === reversed[index]);
};

// Do not edit below this line
module.exports = palindromes;
