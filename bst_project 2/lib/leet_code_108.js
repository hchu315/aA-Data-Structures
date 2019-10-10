// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/*
Given an array where elements are sorted in ascending order, 
convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.

1) take mid number of array because that could serve as the root.
2) recursively build the tree in a binary manner, but continuously taking the mid number of the array

*/

function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  let idx = Math.floor(nums.length / 2);
  let mid = nums[idx];

  let root = new TreeNode(mid);

  root.left = sortedArrayToBST(nums.slice(0, idx));
  root.right = sortedArrayToBST(nums.slice(idx + 1));

  return root  
}

