/*
	@param {character[][]} board
	@param {string} word
	@return {boolean}
*/

// backtrack 
var exist = function(board, word) {
	for(var i=0; i<board.length; i++){
		for(var j=0; j<board[0].length; j++){
			if(explore(board, word, i, j, 0)) return true;
		}
	}
	return false;
};

function explore(board, word, row, col, charCt) {
	if(charCt>=word.length) return true;
	if( row<0 || row>board.length-1 || col<0 || col>board[0].length-1) return false;
	if(board[row][col]===word.charAt(charCt++)){
		var tmp = board[row][col];
		// mark the elements that has been traversed before 
		board[row][col] = '#';
		var subRes = explore(board, word, row+1, col, charCt) ||
					 explore(board, word, row-1, col, charCt) ||
					 explore(board, word, row, col+1, charCt) ||
					 explore(board, word, row, col-1, charCt);
		board[row][col] = tmp;
		return subRes;
	}
	return false;
}



