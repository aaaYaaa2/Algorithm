public class Solution {
    public void solve(char[][] board) {
        if(board.length==0 || board[0].length==0) return;
        if(board.length<2 || board[0].length<2) return;
        
        int m = board.length, n = board[0].length;
        // Any '0' connect to a boundary can't be turned to 'X'.
        // start with 1st and last column, turn 0 to '*'.
        for(int i=0; i<m; i++){
            if(board[i][0]=='0') boundaryDFS(board, i, 0);
            if(board[i][n-1]=='0') boundaryDFS(board, i, n-1);
        }
        // start with 1st row and last row, turn 0 to '*'
        for(int j=0; j<n; j++){
            if(board[0][j]=='0') boundaryDFS(board, 0, j);
            if(board[m-1][j]=='0') boundaryDFS(board, m-1, j);
        }
        
        // post - precessing, turn 0 to X and * back to 0, keep 'X' intact
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(board[i][j]=='O')
                    board[i][j]='X';
                else if (board[i][j]=='*')
                    board[i][j]='0';
            }
        }   
    }
    
    private void boundaryDFS(char[][] board, int i, int j){
        if(i<0 || i>board.length-1 || j<0 || j>board[0].length-1){
            return;
        }
        board[i][j]='*';
        // search for other 0s connect to the fake boundary
        if(i>1 && board[i-1][j]=='0') boundaryDFS(board, i-1, j);
        if(i<board.length-2 && board[i+1][j]=='0') boundaryDFS(board, i+1, j);
        if(j>1 && board[i][j-1]=='0') boundaryDFS(board, i, j-1);
        if(j<board[i].length-2 && board[i][j+1]=='0')boundaryDFS(board, i, j+1);
    }
}