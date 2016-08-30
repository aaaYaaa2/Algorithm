/**
 *	@param {number[][]} board
 *	@return {void}
 */
 var gameOfLife = function(board) {
 	// array to represent directions 
 	var direction = [[-1,-1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1,-1],[1, 0],[1, 1]];
 	for(var row=0; row<board.length; row++){
 		for(var col=0; col<board[row].length; col++){
 			var live = 0;
 			for(var i=0; i<direction.length; i++){
 				// new index 
 				var x = row + direction[i][0];
 				var y = col + direction[i][1];

 				// check the corner case of the matrix 
 				if( x>=0 && x<=board.length-1 && y>=0 && y<=board[0].length-1 ) {
 					if(board[x][y]===1||board[x][y]===-1) live++;
 				}
 			}
 			console.log(live);
 			// -1 represent live --> die
 			if(board[row][col]===1 && (live<2 || live>3)) board[row][col]=-1;
 			// 2 represent die --> live 
 			if(board[row][col]===0 && live===3) board[row][col]=2; 
 		}
 	}
 	// finish update status, then we need to transform -1 to 0, 2 to 1
 	for(row=0; row<board.length; row++){
 		for(col=0; col<board[0].length; col++){
 			if(board[row][col]===-1) board[row][col]=0;
 			if(board[row][col]===2) board[row][col]=1;
 		}
 	}
 	// finish transform 
 	return board;
 }

 var input = [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]];
console.log(gameOfLife(input));