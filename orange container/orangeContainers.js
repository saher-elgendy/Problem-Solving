/*

Orange containers

 We have number of containers , every container contains a number of oranges, this number can
 be non-odd or odd, the seller needs to populate the containers on the table but in a certain 
 pattern, he needs to sort them from left to right in a ascending order but every two non-odd 
 number oranges containers should have one odd in between, odd containers also should be
 arranged in ascending pattern, if there are no more containers of one type, the seller would
 continue populating the containers of the type still present in ascending way till there are 
 no more containers.
  
 
  
 Write a function that populates the containers in ascending pattern depending on the number of 
 oranges taking in consideration the type of this number non-odd or odd.

for example, if we have certain number of containers each can contain odd and non-odd number
oranges like this:

[72,0,12,13,42,3,28,54,22,76,50,17,53,7]

the final result should be like this

[0,3,12,7,22,13,28,17,42,53,50,54,72,76]

*/


//Solution 1

const sortOrange = (arr) => {
  // extract the two arrays
  const sortedEvenArr = arr.filter(el => el % 2 === 0).sort((a, b) => a -b);
  const sortedOddArr = arr.filter(el => el % 2 === 1).sort((a, b) => a - b);
  let result = [];
  //will use this variable to keep reference of the index inside the inner loop
  let counter = -1;

  for(let i = 0; i < sortedEvenArr.length; i++) {
  	//add an even number in each cycle
    result.push(sortedEvenArr[i]);
    counter++;
    
    for(let j = counter; j < sortedOddArr.length; j++) {
      //add one odd element then break the loop
      result.push(sortedOddArr[j]);
      break;
    }
  }
  //add remaining odd numbers if exist
  return result.concat(sortedOddArr.slice(counter + 1));
}


sortOrange([72,0,12,13,42,3,28,54,22,76,50,17,53,7]); //[0,3,12,7,22,13,28,17,42,53,50,54,72,76]

 --------------------------------------------------------------------------------------------------

//Solution 2

const sortOrange = (arr) => {

  const sortedEvenArr = arr.filter(el => el % 2 === 0).sort((a, b) => a -b);
  const sortedOddArr = arr.filter(el => el % 2 === 1).sort((a, b) => a - b);
    
  for( let j = 0; j < sortedEvenArr.length; j++){ 
    if((j % 2 !== 0) && sortedOddArr.length){ // if the index is odd and still elements present in odd array     
       sortedEvenArr.splice(j,0,Number(sortedOddArr.splice(0,1).join(""))); //add one additional element to even array         
    }
  }
 
  return sortedEvenArr.concat(sortedOddArr);     
}

sortOrange([72,0,12,13,42,3,28,54,22,76,50,17,53,7]); //[0,3,12,7,22,13,28,17,42,53,50,54,72,76]