/**
 *	Good ways to keep two pointer and check for characters that have ceratin restrictions
 * 	One choice is to use while loop inside while loop,
 *  another choice is to use if inside while loop. while seems slower than if case 
 *	for this problem 
 */

public class ValidPalindromesummary{
	public boolean isPalindrome1(String s) {
        int frontCount=0, endCount=s.length()-1;
        char front, end;
        while(frontCount<endCount){
            front = s.charAt(frontCount);
            end = s.charAt(endCount);
            if(!Character.isLetterOrDigit(front)){
                frontCount++;
            }else if(!Character.isLetterOrDigit(end)){
                endCount--;
            }else{
                if(Character.toLowerCase(front)!=Character.toLowerCase(end)) return false;
                frontCount++;
                endCount--;
            }
        }
        return true;
    }

    public boolean isPalindrome2(String s) {
        if(s==null || s.length()==0) return true;
        s = s.toLowerCase();
        int front=0, end=s.length()-1;
        while(front<end){
            while(front<end && !Character.isLetterOrDigit(s.charAt(front))) front++;
            while(front<end && !Character.isLetterOrDigit(s.charAt(end))) end--;
            if(front<end && s.charAt(front)!=s.charAt(end)) return false;
            front++;
            end--;
        }
        return true;
    }
}