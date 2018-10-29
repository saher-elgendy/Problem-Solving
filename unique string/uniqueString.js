









/*
The unique string

Write a function that can take two or more strings as arguments and returns a string represent them all , all characters should be in same order in the original string but no duplication in the returned string

For example

uniqueStr("abcd","ahkd") // abcdhk
uniqueStr("rbanr","fzyrc") // rbanfzyc
uniqueStr("I","am","passionate", 'problem', 'solver') // Iampsionterblv

consider uppercase and lowercase letters are different characters

*/


//Solution 1

const uniqueString = (...args) => {
  let results = [];
  args.forEach(word => [...word].forEach(letter => !results.includes(letter) ? results.push(letter) : ''))
  return results.join('');
}

uniqueString('abcd', 'cdfg')//'abcdfg'
uniqueString("rbanr","fzyrc"); //rbanfzyc
--------------------------------------------------------------------------------------------------

//Solution 2 (Use of Set)

const uniqueString = (...args) => [...new Set(args.reduce((acc, cur) => [...acc].concat([...cur], [])))].join('');