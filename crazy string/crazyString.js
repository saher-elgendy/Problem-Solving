/*

Crazy String
Write a function that takes a string as an argument and returns another string exactly like the examples below

strManip("abcd")    // AbAc-BcBd-CdC-DD
strManip("hello")  // HeHl-ElEl-LlLo-LoL-OO
strManip("hi")    // HiH-II
strManip("A")    // AA
strManip("cAt") // CaCt-AtA-TT

explanation of the pattern

the returned string should follow this pattern

 uppercase letter + next lowercase letter +  same uppercase letter again +  second next lowercase

*/

//Solution 1

const strManip = (str) => {
  let newStr = '';

  for(let i = 0; i < str.length; i++ ) {
  	let upperCaseChar = str[i].toUpperCase()
    newStr += upperCaseChar + (str[i + 1] ? str[i + 1].toLowerCase() : '') + upperCaseChar + (str[i + 2] ? str[i + 2].toLowerCase() : '') + '-';
  }

  return (newStr).slice(0, -1);
}

console.log(strManip('abcd'))//AbAc-BcBd-CdC-DD

//Es6 one line map version

const strManip = (str) => str.split('').map((letter, i, arr) => letter.toUpperCase() + (arr[i + 1] ? arr[i + 1].toLowerCase() : '') + letter.toUpperCase() + (arr[i + 2] ? arr[i + 2].toLowerCase() : '')).join('-');

---------------------------------------------------------------------------------------------------------------

//solution 2
