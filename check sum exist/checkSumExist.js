/*
write a function that takes an array of numbers as arguments and returns true or false depending on the following:

true if sum of two numbers in the array exist in the array
false if there is no two elements do this
For example

check([1,2,3]); // true as 1+2 =3
check([5,4,6,8,3,10])  // true as 5 + 3 = 8 which is enough to make it true 
check([1,2,4])   // false // no two elements sum exists in the array
check([12,10,16,3,20]) // false 

*/


//Solution

const checkSumExist = arr => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr.includes(arr[i] + arr[j])) return true;   
    }
  }

  return false; 
}

