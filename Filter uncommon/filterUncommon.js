/*

Write a function that takes two arrays of numbers as arguments and returns only one array represents all the numbers that are not common between the two arrays excluding the numbers that is divisible by any number that is common between the two arrays(> 1)

note, no repeated element in the final array and the elements should be in the same order in their original arrays
lets jump to examples

filter([1,2,3],[1,2,4]); // [3] as 4 is divisible by 2( the common number)
filter([1,6,2,5,5,8,3,7,8],[2,6,4,4,9,1]) // [5, 3, 7, 9]
the numbers that are not common between the two arrays are 5,5,8,3,7,8,4,4,9 but 8 and 4 are divisible by 2 which is a common number so they are excluded and the result would be [5,3,7,9]

*/



//Solution 1

const filter = (arr1, arr2) => {
  const merge = [...arr1, ...arr2];
  const unCommon = merge.filter(el => (!arr1.includes(el) && arr2.includes(el)) || (arr1.includes(el) && !arr2.includes(el)));
  const common = merge.filter(el => !unCommon.includes(el));
  
  for(let i = unCommon.length - 1 ; i >= 0 ; i--) {
  	for(let j = 0; j < common.length; j++) {
  	  if(unCommon[i] % common[j] === 0 && common[j] !== 1)  unCommon.splice(i, 1);
  	}
  }
  
  return [...new Set(unCommon)];
}

filter([1,6,2,5,5,8,3,7,8],[2,6,4,4,9,1]);




