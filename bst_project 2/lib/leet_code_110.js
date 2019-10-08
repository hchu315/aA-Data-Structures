// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return true;

  function isBalancedDfs(root) {
    if (!root) return -1;

    let left = isBalancedDfs(root.left) + 1
    let right = isBalancedDfs(root.right) + 1

    if (Math.abs(left - right) > 1) {
      return false
    }

    return Math.max(left, right)

  }

  let balanced = isBalancedDfs(root);
  return (!!balanced)
}

1. Return height from subtrees and compare, if greater than 1, return false
2. Use DFS/recursion to derive height