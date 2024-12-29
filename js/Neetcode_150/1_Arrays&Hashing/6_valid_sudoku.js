//Valid Sudoku: Given a 2-D 9*9 array of characters where each character is an no. b/w [1,9] or is '.' (which implies empty). Return false if any row has a repeating no. OR if any col has a repeating no. OR if any 3*3 sub-box(there are 9 subboxes, see diagram) has a repeating no. 

let rows = Array.from({ length: 9 }, () => new Set()); //creates 9 sets (for 9 rows)
let cols = Array.from({ length: 9 }, () => new Set()); //creates 9 sets (for 9 cols)
let boxes = Array.from({ length: 9 }, () => new Set()); //creates 9 sets (for 9 sub-boxes)

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let value = board[i][j];

        // Skip empty cells
        if (value === '.') continue;

        // Calculate box index
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        // Check for duplicates in row, column, or box
        if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
            return false;
        }

        // Add the value to sets
        rows[i].add(value);
        cols[j].add(value);
        boxes[boxIndex].add(value);
    }
}

return true; // Valid Sudoku
};