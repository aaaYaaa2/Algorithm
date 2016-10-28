public int updateBits(int n, int m, int i, int j) {
        // write your code here
        int clearMask = 0;
        if(j < 31){
            int allones = ~0;
            int left = allones << (j+1);
            int right = (1 << i) -1;
            clearMask = left | right;
        }else{
            clearMask = (1 << i)-1;
        }
        
        int clearedn = clearMask&n;
        int longerM = m << i;
        return clearedn | longerM;
    }