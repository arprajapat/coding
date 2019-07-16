import { TreeNode } from './TreeNode'

export const main = (arr: number[]) => {
    return constructTree(arr, 0, arr.length-1);
}

const constructTree = (arr: number[], start: number, end: number) => {
    if(start > end) return null;
    
    const mid = Math.floor((start+end)/2);
    const root = new TreeNode(arr[mid]);
    root.left = constructTree(arr, start, mid-1);
    root.right = constructTree(arr, mid+1, end);
    return root;
}

main([-10,-3,0,5,9]);

