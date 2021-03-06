/*
Write a function that takes an array of numbers as arguments and returns an array of numbers 
represents the original array but sorted by the sum of every two opposite elements in the array, 
the least sum put the two elements toward the middle of the array , the bigger should be toward 
the extremities,


Every two opposite elements means that if one is at index i the opposite should be at index 
(length-1-i) so element at index 0 is the opposite of element at index 6 in 7 elements array.

For example

sortSum([1,5,4,6]); // [5,1,6,4]
sortSum([2,14,6,5,8,17,3]); // [14,6,2,5,3,8,17]
Explanation of last example

2 is opposite to 3,
14=>17,
6 =>8 ,
5 is in the middle=> no opposite element, so now 2 and 3 are toward the middle, then 6 and 8 then 14 and 17 at extremities
*/

//solution 1 


function sortSum(arr){  
  let newArr = arr.slice(0); 
  const sums = [];

  for( let i = 0; i < Math.floor(arr.length / 2); i++){  
    sums.push(newArr[i] + newArr[newArr.length - 1 - i]);
  }
    
  let bol = false;
  while(!bol) {  
    bol = true;

    for(let i = 1; i < sums.length; i++){
      if(sums[i - 1] < sums[i]){
        bol = false;
        const store = sums[i - 1];
        sums[i - 1] = sums[i];
        sums[i] = store; 

        const temp = newArr[i - 1];
        newArr[i - 1] = newArr[i];
        newArr[i] = temp;     
      } 
    }
  }

  for(let i = 0; i < sums.length; i++){    
    newArr[newArr.length - 1 - i] = sums[i] - newArr[i];
  } 
 
  return newArr;
}