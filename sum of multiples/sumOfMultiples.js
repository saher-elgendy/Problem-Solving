/*

Multiple Of Sums
Write a function that takes an array of numbers as argument and returns a number respresents multipe of sums of every two next numbers in the array

Examples

multSum([1,2,3,4,5,6]); // 3 * 7 * 11= 231
multSum([1,2,5]) //  3 * 5 = 15

*/


//solution 1


const multSum = (arr, newArr = []) =>  {
  if(arr.length % 2 === 1) newArr = arr.concat(1);
  return (newArr.length ? newArr : arr).reduce((acc, cur, i, array) => {
    if(i % 2 === 0) return acc  + (cur * (array[i + 1] ? array[i + 1]  : 0));
    return acc;
  } ,0); 
}

multSum([1,2,3,5,8,9,6]); //95 
multSum([1,2,3,5,9,10]);//107

----------------------------------------------------------------------------

//solution 2 

const multSum = (arr) => {
  let newArr = arr.length % 2 === 1 ? [...arr, 1] : arr;

  let multiplesArr = [];

  for(let i = 0; i < newArr.length; i = i + 2) {
    if(newArr[i + 1]) multiplesArr.push(newArr[i] * newArr[i + 1]);
  }
  
  return multiplesArr.reduce((acc, cur) => acc + cur, 0);
}

multSum([1,2,3,6,5,8])//60



