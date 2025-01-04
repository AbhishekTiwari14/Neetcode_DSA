//Search in Sorted 2D Matrix: Given a 2D matrix with all rows as well as all cols sorted. Given an integer target, return true if target is in matrix or false otherwise.

bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int r = matrix.size(), c = matrix[0].size();
        int s = 0, e = (r*c)-1;
        while(s<=e){
            int m = s + (e-s)/2;
            int i = m/c;
            int j = m%c;
            if(matrix[i][j] == target) return true;
            else if(matrix[i][j] > target) e = m-1;
            else s = m+1; 
        } 
        return false;
    }