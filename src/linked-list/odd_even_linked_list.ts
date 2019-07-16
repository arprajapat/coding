/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

Note:

    The relative order inside both the even and odd groups should remain as it was in the input.
    The first node is considered odd, the second node even and so on ...
 */

import { ListNode } from './ListNode';
import { LinkedList } from './LinkedList';
/**
 * 
 * @param list 
 */
export const main = <T>(head: ListNode<T>) => {
    if(head == null || head.next == null) {
        return head;
    }

    const evenHead = head.next;
    let isOdd: boolean = true;
    let odd = head, even = evenHead;
    let temp = even.next;

    while(temp != null) {
        if(isOdd) {
            odd.next = temp;
            odd = odd.next;
        }
        else {
            even.next = temp;
            even = even.next;
        }
        isOdd = !isOdd;
        temp = temp.next;
    }
    
    odd.next = evenHead;
    even.next = null;

    return head;
}

const arr = [1,2,3,4,5];
const list = new LinkedList(arr);

let odd_even_list = main(list.head);

//print list: start
let res = '';
while(odd_even_list) {
    res = `${res}${odd_even_list.val} -> `;
    odd_even_list = odd_even_list.next;
}
res = `${res}NULL`;
console.log(res);

//print list: end