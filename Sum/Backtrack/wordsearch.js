/*
	@param {character[][]} board
	@param {string} word
	@return {boolean}
*/

var exist = function(board, word){
	// initialize recording board
	for(var i=0; i<board.length; i++){
		for(var j=0; j<board[0].length; j++){
			if(checkNeighbors(i, j, board, word, 0)) return true;
		}
	}
};


// function for find all possible next position 
function checkNeighbors(row, col, board, word, charCt){
	if(charCt >= word.length) return true;
	if(row<0 || col<0 || row>board.length-1 || col>board[0].length-1) return false;

	if(board[row][col] === word.charAt(charCt++)){
		var tmp = board[row][col];
		board[row][col] = '#';
		var subres = checkNeighbors(row-1, col, board, word, charCt) ||
					 checkNeighbors(row+1, col, board, word, charCt) ||
					 checkNeighbors(row, col+1, board, word, charCt) ||
					 checkNeighbors(row, col-1, board, word, charCt);
		board[row][col] = tmp;
		return subres;
	}
	return false; 
}

// the time complexity is O((m*n)^2) and Space Complexity O(4mn) 