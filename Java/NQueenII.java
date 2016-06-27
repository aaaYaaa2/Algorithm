//NQueenII, you need to keep a global variable of result
public class Solution {
	int result = 0;
	public int totalNQueens(int n){
		//int result = 0;
		helper (new boolean[2*n], new boolean[2*n], new boolean[n], 0);
		return result;
	}

	private void helper (boolean[] diagLeft, boolean[] diagRight, 
		boolean[] cols, int row){
		if(row>cols.length-1) numOfSol++;
		for(int col=0; col<cols.length; col++){
			int leftDiagIdx = col + row, rightDiagIdx = cols.length+(col-row);
			if(!cols[col] && !diagLeft[leftDiagIdx] && !diagRight[rightDiagIdx]){
				//numOfSol++;
				diagLeft[leftDiagIdx]=true;
				diagRight[rightDiagIdx]=true;
				cols[col]=true;
				helper(diagLeft, diagRight, cols, row+1);
				diagLeft[leftDiagIdx]=false;
				diagRight[rightDiagIdx]=false;
				cols[col]=false;
			}
		}
	}
}