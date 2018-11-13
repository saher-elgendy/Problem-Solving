/*
Word recognition
Write a function that takes two arguments the first is an array of words and the second 
is a word and returns array of words containing all words that includes all letters of the 
second argument in the same order of letters, your program should be able recognize the word
in a mess of letters.

For example

wordRecog(["true","trea","track","utre"],"true") //["true"]
wordRecog(["drows","words","wtorssds","downward"],"word")// ["words","wtorssds"]

*/


//Solution 1

const wordRecog = (array, word) => {
  const modifiedWord= word.split("").join("\\w*");
  const reg = new RegExp(("\\b\\w*" + modifiedWord + "\\w*\\b"), "g");
  const output = array.join(" ").match(reg);
  return output ? output : "no matches";
};

wordRecog(["drows","words","wtorssds","downward"],"word");




