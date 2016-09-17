/*
	@param {string} s
	@param {string} t
	@return {boolean}
*/

var isAnagram = function(s, t){
	if(s.length!==t.length) return false;

	var map = {};
    for(var i=0; i<s.length; i++){
        if(map[s[i]]===undefined) map[s[i]]=1;
        else map[s[i]]+=1;
    }
    
    // the second iteration checking trick 
    for(var j=0; j<t.length; j++){
        if(!map[t[j]]){
            return false;
        }
        map[t[j]]--;
    }
    return true;
};