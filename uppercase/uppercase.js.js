/*

write a function that takes a string as argument and returns an array of words as following
examples:

upperCase('hi i am saher elgendy, i am a frontend developer');

output should be: ["Hi", "sahEr", "elgeNdy,", "fronteNd", "developEr"]

explanation:

The returned array should contain words that are big enough to contain a letter in
a suitable index to be uppercased, the target index is incremented from a word to the next word


index 0    index 1      index 2    index 3    index 4    index 5     index 6      index 7
  hi          i           am        saher     elgendy,      a       frontend    develloper

 exist     not exist    not exist   exist      exist     not exist     exist        exist

  Hi       	  i             am      sahEr     elgeNdy       a        fronteNd    developEr

 so the returned array should contain words with target index exist, the letter in the target index
 should be uppercased 

 PS: the target index is the index of the letter in the word that should returned uppercase

 more exampels

 upperCase('i love problem solving') // ["I", "lOve", "prOblem", "solVing"]
 upperCase('JAVASCRIPT IS THE BEST LANGUAGE EVER')//["Javascript", "iS", "thE", "besT", "langUage"]


Note: the returned words letters should be all lowercase except the letter in the target index if exist

*/

//Solution 1

const upperCase = (str) => 
  str.split(' ').map((word, i) => [...word].map((letter, j) => i === j ? letter.toUpperCase() : 
  letter.toLowerCase()).join('')).filter(word => word.toLowerCase() !== word);

 -----------------------------------------------------------------------------------------------




