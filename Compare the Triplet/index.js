//problem link in hackerrank: https://www.hackerrank.com/challenges/compare-the-triplets/problem

//solution
function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }

  return [alicePoints, bobPoints];
}

compareTriplets([17, 12, 80], [5, 12, 99]); //[1, 1]
compareTriplets([30, 15, 8], [14, 18, 32]); //[1, 2]
