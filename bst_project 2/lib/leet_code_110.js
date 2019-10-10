// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return true;

  let heightDiff = Math.abs(calcHeight(root.left) - calcHeight(root.right)) <= 1

  return heightDiff && isBalanced(root.left) && isBalanced(root.right)

}

function calcHeight(root) {
  if (!root) return -1;

  return 1 + calcHeight(root.left) + calcHeight(root.right)
}

/*
1. Return height from subtrees and compare, if greater than 1, return false
2. Use DFS/recursion to derive height
------
1. Check height balance of current Node, and also check left and right Node
*/