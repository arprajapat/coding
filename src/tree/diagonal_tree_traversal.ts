import { TreeNode } from './TreeNode';
// import { main as BST } from './../tree/sorted_array_to_BST';

const main = <T>(root: TreeNode<T>): void => {
    leftDiagonal(root);
    rightDiagonal(root);
}

const leftDiagonal = <T>(root: TreeNode<T>): void => {
    if(root == null) return;
    const queue: TreeNode<T>[] = [];
    queue.push(root);
    let itr = 0;
    let size = queue.length;
    console.log("LEFT DIAGONAL")
    while(itr < queue.length) {
        const outArr = [];
        let pop: TreeNode<T> = null;
        while(pop || itr < size) {
            if(pop == null)
                pop = queue[itr++];
            
            outArr.push(pop.val);
            if(pop.left) {
                queue.push(pop.left);
            }
            pop = pop.right;
        }
        console.log(outArr);
        size = queue.length;
    }
}

const rightDiagonal = <T>(root: TreeNode<T>): void => {
    if(root == null) return;
    const queue: TreeNode<T>[] = [];
    queue.push(root);
    let itr = 0;
    let size = queue.length;
    console.log("RIGHT DIAGONAL")
    while(itr < queue.length) {
        const outArr = [];
        let pop: TreeNode<T> = null;
        while(pop || itr < size) {
            if(pop == null)
                pop = queue[itr++];
            
            outArr.push(pop.val);
            if(pop.right) {
                queue.push(pop.right);
            }
            pop = pop.left;
        }
        console.log(outArr);
        size = queue.length;
    }
}


const root = new TreeNode(20);
root.right = new TreeNode(22);
root.right.right = new TreeNode(25);
root.left = new TreeNode(8);
root.left.right = new TreeNode(12);
root.left.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(10);
root.left.right.left.left = new TreeNode(11);
root.left.left = new TreeNode(4);
main(root);