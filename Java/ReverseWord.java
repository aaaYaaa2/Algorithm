public class Solution {
    public String reverseWords(String s) {
        if(s.trim().length()<=1) return s.trim();
        String[] origin = s.trim().split("\\s+");
        // \\s+ matches one or more white space 
        StringBuilder result = new StringBuilder();
        for(int i=origin.length-1; i>=1; i--){
            result.append(origin[i] + " ");
        }
        result.append(origin[0]);
        return result.toString();
    }

    // Or we can use scanner, which automatically will split by whitespace
    // (and remove leading/trailing whitespace); 

    public String reverseWords(String s){
        if(s.trim().length()<=1) return s.trim();
        Scanner parts = new Scanner(s);

        String result = "";
        while(parts.hasNext()){
            result = parts.next() + " " + result;
        }
        return result.trim();
    }
}