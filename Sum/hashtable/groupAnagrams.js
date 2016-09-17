/*
	@param {string[]} strs
	@return {string[][]} 
*/

var groupAnagrams = function(strs){
	var map = {};
    var result = [];
    for(var i=0; i<strs.length; i++){
        var cur = strs[i].split('').sort().join('');
        if(map[cur]=== undefined){
            map[cur] = [];
        }
        map[cur].push(strs[i]);
    }
    
    for(var arr in map){
        result.push(map[arr]);
    }
    return result;
};