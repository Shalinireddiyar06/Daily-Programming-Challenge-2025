class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }
  return left !== null ? left : right;
}

//Test Cases
//Test Case 1

// Tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

let p = root.left;         
let q = root.right;       
console.log("LCA of 5 and 1:", lowestCommonAncestor(root, p, q).val); 

// Test Case 2
p = root.left;            
q = root.left.right.right;
console.log("LCA of 5 and 4:", lowestCommonAncestor(root, p, q).val); 

// Test Case 3
// Tree: [1, 2]
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);

p = root2;      
q = root2.left;  
console.log("LCA of 1 and 2:", lowestCommonAncestor(root2, p, q).val); 




