// recursive solution 
// keep adding numbers until get exceeds 
public class Solution {
	public int divide(int dividend, int divisor){
		long result = divideLong(dividend, divisor);
		return result > Integer.MAX_VALUE ? Integer.MAX_VALUE : (int)result;
	}

	public long divideLong(long dividend, long divisor){
		// Remember the sign 
		boolean negative = dividend < 0 != divisor < 0;

		// Make dividend and divisor unsign 
		if(dividend<0) dividend = -dividend;
		if(divisor<0) divisor = -divisor;

		// Return if nothing to divide
		if(dividend < divisor) return 0;

		// Sum divisor 2,4,8,16,32 ... times 
		long sum = divisor;
		long divide = 1;
		while((sum+sum)<=dividend){
			sum+=sum;
			divide+=divide;
		}

		// Make a recursive call for (deveded-sum) and add it to result 
		return negative ? -(divide+divideLong((dividend-sum), divisor)) :
			(divide + divideLong((dividend-sum), divisor));
	}
}