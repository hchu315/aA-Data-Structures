// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {

  function recursiveBuild(p, i) {
    if (!p.length || !i.length) return null;

    let value = p[0];
    let rootNode = new TreeNode(value)
    let rootIndex = i.indexOf(value)

    rootNode.left = recursiveBuild(p.slice(1, rootIndex + 1), i.slice(0, rootIndex))
    rootNode.right = recursiveBuild(p.slice(rootIndex + 1), i.slice(rootIndex + 1))

    return rootNode;
  }

  return recursiveBuild(preorder, inorder)
}

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]

// 1. the root is 3.
// 2. the nums left of 3 is left subtree, right of 3 is right subtree
// 3. use root and sort out left and right subtree