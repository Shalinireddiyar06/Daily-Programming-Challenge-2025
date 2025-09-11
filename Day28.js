function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function buildTree(arr) {
  if (!arr.length) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null && arr[i] !== undefined) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

function isSymmetric(root) {
  if (!root) return true; 

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
      t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  }

  return isMirror(root.left, root.right);
}

// Test cases
// Test case 1
let input5 = buildTree([1, 2, 2, 3, 4, 4, 3]);
console.log(isSymmetric(input5)); 

// Test case 2
let input1 = buildTree([1, 2, 2, null, 3, null, 3]);
console.log(isSymmetric(input1));

// Test case 3
let input2 = buildTree([1]);
console.log(isSymmetric(input2)); 

// Test case 4
let input3 = buildTree([]);
console.log(isSymmetric(input3));

// Test case 5
let input4 = buildTree([1, 2, 2, 3, null, null, 3]);
console.log(isSymmetric(input4)); 


