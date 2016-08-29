/**
 *	@param {number[]} nums1
 *	@param {number} m
 *	@param {number[]} nums2
 *	@param {number} n
 *	@return {void} modify in-place
 */
// naive approach 
 var merge1 = function(nums1, m, nums2, n) {
 	// start from the back
 	var len = m+n;
 	m--;
 	n--;
 	while(len--){
 		if( n<0 || nums1[m] > num2[n] ){
 			nums1[len] = nums1[m--];
 		}else{
 			nums1[len] = nums2[n--];
 		}
 	}
 };

 console.log('this');