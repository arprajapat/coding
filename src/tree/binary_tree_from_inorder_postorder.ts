import { TreeNode } from "./TreeNode";

export const main = (inorder: number[], postorder: number[]) => {
    return buildTree(postorder, inorder, 0, postorder.length-1, 0, inorder.length-1) 
}

const buildTree = (postorder: number[], inorder: number[], sp: number, ep: number, si: number, ei: number) => {
    if(sp > ep || si > ei) return null;

    let index;
    for(index = si;index<=ei;index++) {
        if(inorder[index]==postorder[ep])  break;
    }
    if(index<0) return null; // never execute if postorder and inorder are proper;
    
    const node = new TreeNode(postorder[ep]);
    const right = ei-index;
    node.left = buildTree(postorder, inorder, sp, ep-right-1, si, index-1)
    node.right = buildTree(postorder, inorder, ep-right, ep-1, index+1, ei);
    return node;
}

const root = main(
    [9,3,15,20,7],
    [9,15,7,20,3]
    );