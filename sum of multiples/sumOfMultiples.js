/*
sum of multiples
Write a function that takes an array of numbers as argument and returns a number 
respresents sum of multiples of every two next numbers in the array

Examples

multSum([1,2,3,4,5,6]); // 2 + 12 + 30 = 44
multSum([1,2,5]) //  2 + 5 = 7

*/
//solution 1
const multSum = arr => {
  return arr.reduce((acc, cur, i, arr) => {
    if (i % 2 === 0) {
      return acc + (cur * (arr[i + 1] || arr[i + 1] === 0 ? arr[i + 1] : 1))
    }
    return acc;
  }, 0)
}

multSum([1, 2, 3, 5, 8, 9, 6]); //95 
multSum([1, 2, 3, 5, 9, 10]);//107

//----------------------------------------------------------------------------

//solution 2 
const multSum = (arr) => {
  let newArr = arr.length % 2 === 1 ? [...arr, 1] : arr;

  let multiplesArr = [];

  for (let i = 0; i < newArr.length; i = i + 2) {
    if (newArr[i + 1] || newArr[i + 1] === 0) {
      multiplesArr.push(newArr[i] * newArr[i + 1]);
    }
  }

  return multiplesArr.reduce((acc, cur) => acc + cur, 0);
}

multSum([1, 2, 3, 6, 5, 8])//60

//solution 3
const multSum = arr => {
  return arr.map((el, i) => {
      if (i % 2 === 0) {
          const nextEl = arr[i + 1];
          return nextEl || nextEl === 0 ? el * nextEl : el * 1;
      }
      return 0;
  }).reduce((acc, cur) => acc + cur, 0);
}



