import { ListNode } from '../DataType/ListNode';

export class LinkedList<T> {
    public head: ListNode<T>;
    constructor (arr: T[]) {
        this.head = this.createList(arr);
    }

    private createList(arr: T[]): ListNode<T> {
        let head: ListNode<T> = null, tail: ListNode<T> = null;
        for (let index = 0; index < arr.length; index++) {   
            if(!head) {
                head = new ListNode(arr[index]);
                tail = head;
            }
            else {
                tail.next = new ListNode(arr[index]);
                tail = tail.next;
            }
        }
        return head;
    }
}