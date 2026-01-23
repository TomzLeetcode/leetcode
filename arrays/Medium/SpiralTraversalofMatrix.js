/*Input: Matrix[][] = { { 1, 2, 3, 4 },{ 5, 6, 7, 8 },{ 9, 10, 11, 12 },{ 13, 14, 15, 16 } }
Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
Explanation: The output of matrix in spiral form.*/

function sprialofMatrix(matrix){

    let left = 0 , right = matrix[0].length - 1 , top = 0 , bottom = matrix.length - 1;

    let result = [];

    while(top <= bottom && left <= right){

        for(let i = left ; i <= right; i++){
            result.push(matrix[top][i]);
        }

        top ++;

        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }

        right --
    }

    

}
 
let matrix = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

const result = sprialofMatrix(matrix);
console.log(result);