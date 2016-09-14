/*
	@param {string} secret
	@param {string} guess
	@return {string}
*/

// 18088 and 7810 return 1A2B, 180 and 7810 return exception 

// hashtable solution 
var genHint = function(secret, guess){
	var bulls = 0, cows = 0, table={};
	secret = secret.split("");
	guess = guess.split("");
	for(var i=0; i<secret.length; i++){
		if(table[secret[i]]===undefined){
			table[secret[i]] = [i];
		}else{
			table[secret[i]].push(i);
		}
	}
	// console.log(table);
	for(var j=0; j<guess.length; j++){
		if(table[guess[j]]!==undefined){
			// console.log(table[guess[j]].indexOf(j));
			if(table[guess[j]].indexOf(j)!==-1){
				table[guess[j]][table[guess[j]].indexOf(j)]=-1;
				bulls++;
			}else{
				for(var k=0; k<table[guess[j]].length; k++){
					if(table[guess[j]][k]!==-1){
						cows++;
						table[guess[j]][k]=-1;
						break;
					}
				}
			}
			// console.log(table);
		}
	}
	return bulls+'A'+cows+'B';
};

// var secret = "11", guess="01";
// console.log(genHint(secret, guess));

var getHint1 = function(secret, guess){
	var bulls = 0, cows = 0, result=Array.apply(null, Array(10)).map(function(){ return 0; });
	secret = secret.split("");
	guess = guess.split("");
	for(var i=0; i<secret.length && i<guess.length; i++){
		if(secret[i]===guess[i]){
			bulls++;
		}else{
			// check both positive and negative 
			if(result[guess[i]]-- >0) cows++;
			if(result[secret[i]]++ <0) cows++;
		}
	}
	return bulls+'A'+cows+'B';
};

var secret = "11", guess="01";
console.log(getHint1(secret, guess));
