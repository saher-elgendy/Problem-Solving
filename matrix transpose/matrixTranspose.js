/*
A matrix of two-dimensional (N*N) of integers. What you have to do is change the positions 
of the elements above and bellow of the main diagonal of the matrix:

Name of the function: transpose(mat) { }

Example:
Parameter:

1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16
Also all the elements in the main diagonal must be change to 1. Like in the bellow example.
Output must be in a string format. Leave two space as separator between each number:

1  5  9  13
2  1  10 14
3  7  1  15
4  8  12 1

transpose([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);

*/


//solution

const transpose = (matrix) =>  matrix[0].map((column, i) => matrix.map((row,j) => j === i ? 1 : row[i])).join(" ").replace(/\s+/g,"\n").replace(/,/g," ");

