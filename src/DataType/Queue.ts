import { ListNode } from "./ListNode";

export class Queue<T> {
    private head: ListNode<T>;
    private tail: ListNode<T>;
    private _size: number;
    constructor () {
        this.tail = null;
        this.head = null;
        this._size = 0;
    }
    add (val: T): T {
        if(!this.head) {
            this.head = new ListNode(val);
            this.tail = this.head;
        }
        else {
            this.tail.next = new ListNode(val);
            this.tail = this.tail.next;
        }
        this._size++;
        return this.tail.val;
    }
    poll (): T {
        if(this.head) {
            const temp = this.head;
            this.head = this.head.next;
            if(!this.head)
                this.tail = null;
            this._size--;
            return temp.val;
        }
        return null;
    }
    isempty (): boolean {
        return this.head === null;
    }
    peek (): T {
        if(this.head) {
            return this.head.val;
        }
        return null;
    }
    size (): number {
        return this._size;
    }
}