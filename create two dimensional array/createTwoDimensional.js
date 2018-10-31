/*

Write a function that takes two arguments , the first one should be an array and the second one
is a number , the function should return a two dimensional array, each element in the new array 
an array with number of elements equal to the second argument of the function as following examples


createTwoDimensional([1, 2, 5, 13, 8, 9], 2); //  [[1,2], [5,13], [8,9]]
createTwoDimensional([1, 2, 5, 13, 8, 9, 6], 2); //  [[1,2], [5,13], [8,9], [6]]
createTwoDimensional([6, 10, 15, 2, 9, 27, 100, 0, 3, 4, 36], 4); // [[6, 10, 15, 2], [9, 27, 100, 0], [3, 4, 36]]


*/


//Solution one

const createTwoDimensional = (arr, num) => {
  let result = [];

  for(let i = 0; i < arr.length; i = i + num){
    result.push(arr.slice(i, i + num));
  }
  
  return result;
}

createTwoDimensional([1,2,3,5,6], 2);