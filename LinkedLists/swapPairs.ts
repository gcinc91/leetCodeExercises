/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const dummyNode = new ListNode(null, head);
    let current = dummyNode;

    while (current.next != null && current.next.next != null) {

        let firstNode = current.next;
        let secondNode = current.next.next;

        firstNode.next = secondNode.next;
        current.next = secondNode;
        current.next.next = firstNode;

        current = current.next.next;

    }

    return dummyNode.next;

};