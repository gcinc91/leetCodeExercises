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

function hasCycle(head: ListNode | null): boolean {

    let slow = head;
    let fast = head?.next?.next;
    let result = false;

    while (fast?.next != null) {
        if (
            slow.val == fast.val &&
            slow.next == fast.next
        ) {
            result = true;
            fast.next = null
        } else {
            slow = slow.next;
            fast = fast.next.next;
        }
    }
    return result;

};