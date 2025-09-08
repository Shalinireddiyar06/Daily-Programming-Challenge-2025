function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var isValidBST = function(root) {
    function helper(node, min, max) {
        if (!node) return true; 
        if (node.val <= min || node.val >= max) return false;
        return helper(node.left, min, node.val) && 
               helper(node.right, node.val, max);
    }
    return helper(root, -Infinity, Infinity);
};

//Test case 1
let root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root1)); 

//Test case 2
let root2 = new TreeNode(5, 
    new TreeNode(1), 
    new TreeNode(4, new TreeNode(3), new TreeNode(6))
);
console.log(isValidBST(root2)); 

// Test case 3
let root3 = new TreeNode(10, 
    new TreeNode(5), 
    new TreeNode(15, new TreeNode(6), new TreeNode(20))
);
console.log(isValidBST(root3)); 

// Edge case: single node
let root4 = new TreeNode(1);
console.log(isValidBST(root4)); 
