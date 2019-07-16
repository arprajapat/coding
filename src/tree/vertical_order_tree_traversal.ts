import { TreeNode } from "./TreeNode";
interface VObj<T> {
    node: TreeNode<T>,
    dist: number,
}
export const main = <T>(root: TreeNode<T>) => {
    if(!root) return;

    const queue: VObj<T>[] =  [];
    queue.push({node: root, dist: 0});
    let size = queue.length;
    let itr = 0;
    const map = new Map();
    while(itr<queue.length) {
        while (itr < size) {
            const pop = queue[itr++];
            if(!map.has(pop.dist)) map.set(pop.dist, []);

            map.get(pop.dist).push(pop.node.val);
            if(pop.node.left)
                queue.push({node: pop.node.left, dist: pop.dist-1});
            if(pop.node.right)
                queue.push({node: pop.node.right, dist: pop.dist+1});
        }
        size = queue.length;
    }
    let minKey = 0;
    for(let key of map.keys()) {
        minKey = minKey>key ? key: minKey;
    }
    const out = [];
    while(map.has(minKey)) {
        out.push(map.get(minKey));
        minKey++;
    }
    console.log(out);
}

[].sort();

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