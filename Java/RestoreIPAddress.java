public class RestoreIPAddress {
	public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<>();
        if(s.length()<4 || s.length()>12) return result;
        backtrack("", s, result, 0);
        return result;
    }
    
    private void backtrack(String subRes, String s, List<String> res, int n){
        if(n==4){
            if(s.length()==0) res.add(subRes.substring(0,subRes.length()-1));
            return;
        }
        int i = s.length();
            for(int ele=1; ele<=3; ele++){
                if(i>=ele){
                    String tmp = s.substring(0,ele);
                    int val = Integer.parseInt(tmp);
                    if(val<=255 && String.valueOf(val).length()==ele){
                        backtrack(subRes+tmp+".", s.substring(ele), res, n+1);
                    }
                }
            }
    }
}