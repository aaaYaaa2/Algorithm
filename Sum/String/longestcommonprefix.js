/*
	@param {string[]} strs
	@return {string}
*/
var longestCommonPrefix = function(strs) {
	if(strs===undefined || strs.length===0) return '';
    var prefix = strs[0];
    for(var i=1; i<strs.length; i++){
        for(var k=0; k<Math.min(prefix.length, strs[i].length); k++){
            if(prefix.charAt(k)!==strs[i].charAt(k)){
                prefix = strs[i].substring(0, k);
                break;
            }
            // don't forget to take the smaller one between prefix and current string that been compared 
            prefix = strs[i].substring(0, Math.min(prefix.length, strs[i].length));
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(['aa', 'aaaa']));