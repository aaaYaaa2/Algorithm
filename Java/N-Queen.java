public class NQueen {
    // The basic idea is combine backtracking with bitmask
    

    // First i wrote a slow version, which will exceed the time limit 
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        helper(0, new boolean[n], new boolean[2*n], new boolean[2*n], result, new String[n]);
        /*
        *  The 2n length boolean arrays are used to store the diagonal, 
        *  think in this way, we have y = x + c for 45 degree linear function, and y = x - c for -45 degreee linear function 
        *  so we change the record to 
            leftSec: x - y + n (there might be negative value); 
            rightSec: x + y 

            maximum length of both situation is 2*n
        */
        return result;
    }
    private void helper( int row, boolean[] cols, boolean[] leftDia, boolean[] rightDia, List<List<String>> result, 
                        String[] current )
    {
        if(row==cols.length){
            result.add(Arrays.asList(current.clone()));
        }else{
            for(int col=0; col<cols.length; col++){
                int leftSec = row-col+cols.length, rightSec = row+col;
                if(!cols[col] && !leftDia[leftSec] && !rightDia[rightSec] ){
                    char[] newRow = new char[cols.length];
                    Arrays.fill(newRow, '.');
                    newRow[col]='Q';
                    current[row] = new String(newRow);
                    cols[col]=true; leftDia[leftSec]=true; rightDia[rightSec]=true;
                    helper(row+1, cols, leftDia, rightDia, result, current);
                    cols[col] = false; leftDia[leftSec]=false; rightDia[rightSec]=false;
                }
            }
        }
    }

    // change a little on the array part, it now passed ~ 
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        helper(0, new boolean[n], new boolean[2*n], new boolean[2*n], result, new ArrayList<String>());
        return result;
    }
    private void helper( int row, boolean[] cols, boolean[] leftDia, boolean[] rightDia, List<List<String>> result, 
                        List<String> current )
    {
        if(row==cols.length){
            result.add(new ArrayList<String>(current));
        }else{
            for(int col=0; col<cols.length; col++){
                int leftSec = row-col+cols.length, rightSec = row+col;
                if(!cols[col] && !leftDia[leftSec] && !rightDia[rightSec] ){
                    char[] newRow = new char[cols.length];
                    Arrays.fill(newRow, '.');
                    newRow[col]='Q';
                    if(current.size()>=row+1)current.set(row, new String(newRow));
                    else current.add(row, new String(newRow));
                    // changed here, if the current index already exist, we replace the old String with the new one 
                    // if the current index does not exist, we insert it as a new String 
                    cols[col]=true; leftDia[leftSec]=true; rightDia[rightSec]=true;
                    helper(row+1, cols, leftDia, rightDia, result, current);
                    cols[col] = false; leftDia[leftSec]=false; rightDia[rightSec]=false;
                }
            }
        }
    }

    /*
        Since we fill the col for everyrow, the time complexity is O(n^2); 
    */
}