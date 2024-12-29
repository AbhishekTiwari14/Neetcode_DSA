//Valid Sudoku: Given a 2-D 9*9 array of characters where each character is an no. b/w [1,9] or is '.' (which implies empty). Return false if any row has a repeating no. OR if any col has a repeating no. OR if any 3*3 sub-box(there are 9 subboxes, see diagram) has a repeating no. 

 bool isValidSudoku(vector<vector<char>>& board) {
        vector<unordered_set<char>> rows(9), cols(9), boxes(9);
        for(int r=0; r<9; r++){
            for(int c=0; c<9; c++){
                if(board[r][c] == '.') continue;
                int value = board[r][c];
                if(rows[r].find(value) != rows[r].end()) return false;
                if(cols[c].find(value) != cols[c].end()) return false;
                int boxIndex = (r/3) *3 + (c/3);
                if(boxes[boxIndex].find(value) != boxes[boxIndex].end()) return false;
                rows[r].insert(value);
                cols[c].insert(value);
                boxes[boxIndex].insert(value);
            }
        }
        return true;
    }