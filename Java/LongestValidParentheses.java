public class Solution {
	public int longestValidParentheses(String s){
		Stack<Character> stack = new Stack<>();
		int result = 0;
		for(int i=0; i<s.length(); i++){
			if(s.charAt(i)=='('){
				stack.push('(');
			}else if(s.charAt(i)==')'){
				if(!stack.empty()){
					char tmp = stack.pop();
					if(tmp=='('){
						result+=2;
					}else{
						stack = new Stack<Character>();
					}
				}
			}
		}
		return result;
	}

	public int longestValidParentheses1(String s){
		Stack<Integer> stack = new Stack<>();
		int result = 0;
		// push index instead of push parenthese 
		for(int i=0; i<s.length(); i++){
			if(s.charAt(i)=='('){
				stack.push(i);
			}else{
				if(stack.size()>1 && s.charAt(stack.peek())=='('){
					// transform ()() to (())
					stack.pop();
					result = Math.max(result, i-stack.peek());
				}
			}
		}
		return result;
	}
}