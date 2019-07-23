import { DoubleListNode } from "./ListNode";

export class DoubleList<T> {
    private head: DoubleListNode<T>;
    private tail: DoubleListNode<T>;
    private size: number
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };
    addfirst(val: T) {
        if(!this.head) {
            this.head = new DoubleListNode(val);
            this.tail = this.head;
            this.size++;
            return this.head;
        }
        const node = new DoubleListNode(val);
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.size++;
        return this.head;
    }
    addLast(val: T) {
        if(!this.head) {
            this.head = new DoubleListNode(val);
            this.tail = this.head;
            this.size++;
            return this.tail;
        }
        const node = new DoubleListNode(val);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.size++;
        return this.tail;
    }
    getSize() {
        return this.size;
    }
    delete(node: DoubleListNode<T>) {
        if(this.size==1 && this.tail === node) {
            this.reset();
            return true;
        }

        if(this.tail === node) {
            const temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        else if(this.head === node) {
            const temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        else {
            const temp = node.prev;
            temp.next = node.next;
            temp.next.prev = temp;
            node.prev = null;
            node.next = null;
        }
        this.size--;
        return true;
    }
    deleteLast() {
        this.delete(this.tail);
    }
    deleteFirst() {
        this.delete(this.head);
    }
    private reset () {
        this.head = null;
        this.tail = null
        this.size = 0;
    }
    printList() {
        let temp = this.head;
        let res = '';
        while(temp) {
            res = res + temp.val +'->';
            temp = temp.next;
        }
        res = res+'NULL';
        console.log(res);
    }
}

// const list = new DoubleList();
// list.addLast(1);
// const t2 = list.addfirst(2);
// const t3 = list.addfirst(3);
// // list.delete(t2);
// list.printList();
// // list.delete(t1);
// list.printList();
// list.delete(t3);
// console.log(list.getSize());
// list.addfirst(6)
// list.addfirst(6)
// list.addfirst(6)
// console.log(t2)
// list.printList();