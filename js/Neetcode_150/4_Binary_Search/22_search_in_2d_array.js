//Search in Sorted 2D Matrix: Given a 2D matrix with all rows as well as all cols sorted. Given an integer target, return true if target is in matrix or false otherwise.

var searchMatrix = function(matrix, target) {
    const r = matrix.length;
    const c = matrix[0].length;
    let s=0, e = (r*c) - 1;
    while(s<=e){
        let m = Math.floor(s + (e-s)/2);
        let i = Math.floor(m/c);
        let j = m%c;
        if(matrix[i][j] === target) return true;
        else if(matrix[i][j] < target) s = m+1;
        else e = m-1;
    }  
    return false;
};