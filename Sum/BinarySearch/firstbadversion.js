/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
  		var lo = 1, hi = n;
  		while(lo<hi){
  			var mid = lo + Math.floor((hi-lo)/2);
  			if(isBadVersion(mid)){
  				if(isBadVersion(mid-1)){
  					hi = mid-1;
  				}else{
  					return mid;
  				}
  			}else{
  				lo = mid+1;
  			}
  		}
  		return lo;      
    };
};

var solution1 = function(isBadVersion) {
	return function(n) {
		var lo = 1, hi = n;
  		while(lo<hi){
  			var mid = lo + Math.floor((hi-lo)/2);
  			if(isBadVersion(mid)){
  				hi = mid;
  			}else{
  				lo = mid+1;
  			}
  		}
  		return lo; 
	};
};