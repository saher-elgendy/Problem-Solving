/*
Remove All Copies
Write a function that remove all repeated elements in array represents the argument of the function,if the element is repeated,
it should be removed with its copies from the array, the remaining elements should be in the same order as original one.
For example
removeCopies([5,8,4,8,3,2,1,5]); // [4,3,2,1]
removeCopies([1,6,"a",6,"b",7,8,"a",1]); // ["b",7,8]
*/


//Solution 1:

const removeCopeis = (arr) => arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));

removeCopies([1,2,1,2,3,5,8,3,6]) //[5, 8, 6]
removeCopies([1,6,"a",6,"b",7,8,"a",1]); // ["b",7,8]
-----------------------------------------------------------------------------------------------------

//Solution 2(Imperative one)
const removeCopies = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        arr[i] = null;
        arr[j] = null; 
      }

    }
  }
  return arr.filter(el => el); 
} 
removeCopies([1,2,1,2,3,5,8,3,6]) //[5, 8, 6]
removeCopies([1,6,"a",6,"b",7,8,"a",1]); // ["b",7,8]