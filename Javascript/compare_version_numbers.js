/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var ver1 = version1.split(".");  
    var ver2 = version2.split(".");
    // split the two version string 

    for(var i=0; i<Math.min(ver1.length, ver2.length); i++){
    	if(Number(ver1[i])>Number(ver2[i])) return 1;
    	if(Number(ver1[i])<Number(ver2[i])) return -1;
    }
    if(Math.min(ver1.length, ver2.length)===Math.max(ver1.length, ver2.length)) return 0;

    var longerOne = ver1.length > ver2.length? ver1 : ver2;
    for(var k=i; k<longerOne.length; k++){
    	if(Number(longerOne[k])!==0) return (ver1.length===longerOne.length? 1 : -1);
    }
    return 0;
};

// var result = compareVersion("1.0.0000", "1");
// console.log(result);

// another solution 

var compareVersion2 = function(version1, version2){
	var a = version1.split(".");
	var b = version2.split(".");
	var num1, num2;
	// push 0 to the end of array to make the two arrays have same length 
	while(a.length < b.length) a.push("0");
	while(b.length < a.length) b.push("0");

	for(var i=0; i<a.length; i++){
		num1 = parseInt(a[i], 10);
		num2 = parseInt(b[i], 10);
		if(num1<num2) return -1;
		if(num1>num2) return 1;
	}
	return 0;
};

var result2 = compareVersion2("1.2.00", "1.3");
console.log(result2);
