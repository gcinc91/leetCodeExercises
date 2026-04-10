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

function deleteDuplicates(head: ListNode | null): ListNode | null {

    if (!head) return head;
    const exist = {}
    let result = head;
    let prev;


    while (head != null) {

        if (exist[head.val]) {
            if (head.next) {
                head.val = head?.next?.val
                head.next = head?.next?.next
                if (prev.val != head.val) {
                    prev = head
                }
            } else {
                prev.next = null
                head = null
            }
        } else {
            exist[head.val] = 1
            prev = head
            head = head.next
        }
    }

    return result;

};