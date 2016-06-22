public class NumArray {
    private TreeNode SegTree;
    private int[] Arr;
    public NumArray(int[] nums) {
        if (nums==null || nums.Length==0) { return; }
        SegTree = new TreeNode(0);
        Arr = nums;
        ConstructST(SegTree, nums, 0, Arr.Length-1);
    }

    public void Update(int i, int val) {
        if (Arr==null) { return; }
        int diff = val - Arr[i];
        Arr[i] = val;
        UpdateTree(SegTree, i, diff, 0, Arr.Length-1);
    }

    private void UpdateTree(TreeNode root, int i, int diff, int st, int ed){
        if (i<st || i>ed){
            return;
        }
        root.val += diff;
        if (st==ed) { return; }
        int mid = st + (ed-st)/2;
        UpdateTree(root.left, i, diff, st, mid);
        UpdateTree(root.right, i, diff, mid+1, ed);
    }

    public int SumRange(int i, int j) {
        if (Arr==null) { return 0; }
        return Search(SegTree, i, j, 0, Arr.Length-1);
    }

    private int Search(TreeNode root, int i, int j, int st, int ed ){
        if (i<=st && j>=ed) {
            return root.val;  // this is the range sum
        }
        if (i>ed || j<st) {
            return 0;
        }
        int mid = st + (ed-st)/2;
        return Search(root.left, i, j, st, mid) + Search(root.right, i, j, mid+1, ed);
    }

    private int ConstructST(TreeNode root, int[] nums, int st, int ed){
        if (st==ed){
            root.val = nums[st];
            return root.val;
        }
        root.left = new TreeNode(0);    // either 0 or 2 children
        root.right = new TreeNode(0);  // we can see that this will be a full binary tree
        int mid = st + (ed-st)/2;      
        int sum = ConstructST(root.left, nums, st, mid)
                    + ConstructST(root.right, nums, mid+1, ed);
        root.val = sum;
        return root.val;
    }

    private class TreeNode{
        public int val;
        public TreeNode left;
        public TreeNode right;
        public TreeNode(int val){
            this.val = val;
        }
    }
}