public Solution {
	public String fractionToDecimal(int numerator, int denominator){
		if(numerator==0) return "0";
		StringBuilder result = new StringBuilder();
		// handling corner case like negative value, 
		// and possible overflow thing 
		// + or -
		result.append(((numerator>0)^(denominator>0))? "-" : "");

		long num = Math.abs(numerator);
		long den = Math.abs(denominator);
		result.append(num/den);
		num%=den; // get the remainder
		if(num==0) return result.toString();
		
		result.append(".");
		Map<Long, Integer> map = new HashMap<>();
		// use a hashmap to store the repetitive part 
		map.put(num, result.length());
		while(num!=0){
			num*=10;
			result.append(num/den);
			num%=den;
			if(map.containsKey(num)){
				int index = map.get(num);
				result.insert(index, "(");
				result.append(")");
				break;
			}else{
				map.put(num, result.length());
			}
		}
		return result.toString();
	}
}