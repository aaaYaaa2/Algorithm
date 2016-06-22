// Problem is contain Duplciates III 
// Here are 3 ways to solve it:

// Naive approach: sort every k elements, check adjacent pair to see if the difference is smaller than t

public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        if(nums.length<=1 || k==0) return false; // if there are not enough number then return false
        if(nums.length<k+1){
            Arrays.sort(nums);
            for(int m=0; m<nums.length-1; m++){
                if(((long)nums[m+1]-(long)nums[m])<=t) return true;
            }
            return false;
        }
        
        
        for(int pt1=0, pt2=k; pt2<nums.length; pt1++, pt2++){
            int[] temp = new int[k+1];
            for(int p=pt1, i=0; p<=pt2; p++){
                temp[i++] = nums[p];
            }// copy the value to another array 
            Arrays.sort(temp);
            // sort the array 
            for(int m=0; m<k; m++){
                if(((long)temp[m+1]-(long)temp[m])<=t) return true;
            }
            
        }
        return false;
}

// Use java.util.TreeSet Class

public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
         if(nums==null || nums.length==0 || k==0) return false;
         
         final TreeSet<Long> values = new TreeSet<>();
         for(int i=0; i<nums.length; i++){
             long current = nums[i];
             if(values.floor(current)!=null && current-values.floor(current)<=t) return true;
             if(values.ceiling(current)!=null && values.ceiling(current)-current<=t) return true;
             values.add(current);
             if(i>=k) values.remove((long)nums[i-k]);
         }
         return false;
} 

// Use bucket sort 
// but it cannot handle negative difference here. 
public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t){
         if(nums.length==0 || nums==null || k==0) return false;
         Map<Long, Long> map = new HashMap<>();
         for(int i=0; i<nums.length; i++){
             long remapNum = (long) nums[i] - Integer.MIN_VALUE; // compute the number 
             long bucket = remapNum / ((long)t+1); // compute the bucket index 
             if(map.containsKey(bucket) || 
                (map.containsKey(bucket-1) && remapNum - map.get(bucket-1)<=t) ||
                (map.containsKey(bucket+1) && map.get(bucket+1)-remapNum<=t)){
                    return true;
                }
            if(map.entrySet().size()>=k){
                long firstBucket = ((long)nums[i-k] - Integer.MIN_VALUE)/((long)t+1);
                map.remove(firstBucket);
            }// if the size exceeds k then we remove the first bucket in the sequence 
            map.put(bucket, remapNum);
         }
         return false;
}

/**
* there are two maps here, first you remap every number 
* then you map number to bucket, 
* you keep the size of map as a control for distance limit k. 
*/

