public class NQueenProblem{
	// NQueen I
	public List<List<String>> solveNQueen1(int n){
		List<List<String>> result = new ArrayList<>();
		helper1(0, new boolean[n], new boolean[2*n], new boolean[2*n], result, new ArrayList<String>());
		return result;
	}

	private void helper1(int row, boolean[] cols, boolean[] leftDia, boolean[] rightDia, List<List<String>> result, 
						List<String> current){
		if(row==cols.length){
			result.add(new ArrayList<String>(current));
		}else{
			// for each row, iterate through each position for columns 
			// skip if the condition is not satisfied 
			for(int col=0; col<cols.length; i++){
				// x+y and x-y to record the mark the taken position 
				int leftSec = row-col+col.length, rightSec = row+col;
				if(!cols[col] && !leftDia[leftSec] && !rightDia[rightSec]){
					char[] newRow = new char[cols.length];
					Arrays.fill(newRow, '.');
					newRow[col]='Q';
					if(current.size()>=row+1){
						current.set(row, new String(newRow));
					}else{
						current.add(row, new String(newRow));
					}
					cols[col]=true; leftDia[leftSec]=true; rightDia[rigtSec]=true;
					helper(row+1, cols, leftDia, rightDia, result, current);
					cols[col] = false; leftDia[leftSec]=false; rightDia[rightSec]=false;
				}
			}
		}
	}

	// NQueen II
	int result = 0;
	public int totalNQueen2(int n){
		helper2(new boolean[2*n], new boolean[2*n], new boolean[n], 0);
		return result;
	}

	private void helper2(boolean[] diagLeft, boolean[] diagRight, boolean[] cols, int row){
		if(row==cols.length) result++;
		for(int col = 0; col<cols; col++){
			int leftDia = col+row, rightDia=col-row+cols.length;
			if(!diagLeft[leftDia] && !diagRight[rightDia] && !cols[col]){
				diagLeft[leftDia]=true; diagRight[rightDia]=true; cols[col]=true;
				helper2(diagLeft, diagRight, cols, row+1);
				diagLeft[leftDia]=false; diagRight[rightDia]=false; cols[col]=false;
			}
		}
	}
}