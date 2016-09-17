/*
	@param {character[][]} board
	@return {boolean}
*/

var isValidSudoku = function(board) {
	for(var i=0; i<9; i++){
		// for certain row 
		if(!isPartialValid(board, i, i, 0, 9 )) return false;
		// for certain column
		if(!isPartialValid(board, 0, 9, i, i)) return false;
		// for each square
		for(var i=0; i<3; i++){
			for(var j=0; j<3; j++){
				if(!isPartialValid(board, 3*i, 3*i+2, 3*j, 3*j+2)) return false;
			}
		}
	}
};

function isPartialValid(board, x1, x2, y1, y2){
	var set = {};
	for(var i=x1; i<=x2; i++){
		for(var j=y1; j<=y2; j++){
			if(board[i][j]!=='.') continue;
			if(set[board[i][j]]===undefined) set[board[i][j]] = true;
			if(set[board[i][j]]!==undefined) return false;
		}
	}
}