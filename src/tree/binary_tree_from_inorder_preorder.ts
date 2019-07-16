import { TreeNode } from "./TreeNode";


export const main = (preorder: number[], inorder: number[]) => {
    return buildTree(preorder, inorder, 0, preorder.length-1, 0, inorder.length-1) 
}

const buildTree = (preorder: number[], inorder: number[], sp: number, ep: number, si: number, ei: number) => {
    if(sp > ep || si > ei) return null;
    let index = -1;
    for (let i = si; i<= ei; i++) {
       if(preorder[sp]==inorder[i]) {
           index = i;
           break;
       }
    }
    if(index < -1) return null;
    const size = index-si;
    const node = new TreeNode(preorder[sp]);
    node.left = buildTree(preorder, inorder, sp+1, sp+size, si, index-1);
    node.right = buildTree(preorder, inorder, sp+size+1, ep, index+1, ei);
    return node;
}

const printTree = (root: TreeNode<number>):void => {
    if(!root) return;
    console.log(`${root.val} => [${root.left && root.left.val}, ${root.right && root.right.val}]`)
    printTree(root.left);
    printTree(root.right);
}
const root = main(
    [3,9,20,15,7],
    [9,3,15,20,7]
    );
printTree(root);
