// convert 1D to 2D 
// be careful to initialize the StringBuffer first 
public class ZigZagConversion{
	public String convert(String s, int numRows){
		StringBuffer[] sb = new StringBuffer[numRows];
		int len = s.length(), i=0;
		char[] chars = s.toCharArray();
		for(int j=0; j<numRows; j++) sb[0] = new StringBuffer();
		while(i<len){
			for(int idx=0; idx<numRows && i<len; idx++){
				sb[idx].append(chars[i++]);
			}// straight down 
			for(int idx=numRows-2; idx>=1 && i<len; idx--){
				sb[idx].append(chars[i++]);
			}// oblique up 
		}
		for(int j=1; j<numRows; j++){
			sb[0].append(sb[j]);
		}
		return sb[0].toString();
	}
}