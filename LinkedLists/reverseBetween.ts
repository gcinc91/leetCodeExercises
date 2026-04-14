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

const reverseSubList = (list, whereStop) => {
    console.log('aqui paro ', whereStop)

    let i = 0
    let prev = null;
    let next_temp;
    let head = list
    while (i <= whereStop) {
        next_temp = head?.next
        head.next = prev
        prev = head
        head = next_temp
        i++
    }

    return prev
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    if (!head) return head;
    if (!head || left === right) return head;

    const dummyNode = new ListNode(0, head);
    let nodoBefore = dummyNode;

    for (let i = 1; i < left; i++) {
        nodoBefore = nodoBefore.next!;
    }

    let prev: ListNode | null = null;
    let curr = nodoBefore.next;
    let nextNode: ListNode | null;
    let firstNode = curr;

    for (let i = 0; i < right - left + 1; i++) {
        if (curr === null) break;
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    nodoBefore.next = prev;
    if (firstNode) {
        firstNode.next = curr;
    }

    return dummyNode.next;

};