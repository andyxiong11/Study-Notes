//Definition for singly-linked list.

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
// ————————————————
private static ListNode help(int[] arr) {
    ListNode dummy = new ListNode(-1);
    ListNode cur = dummy;
    for (int i = 0; i < arr.length; i++) {
       ListNode node = new ListNode(arr[i]);
       cur.next = node;
       cur = cur.next;
       if(i == arr.length - 1){
          cur.next = null;
       }
    }
    return dummy.next;
 }
// 版权声明：本文为CSDN博主「bijian0530」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/bijian0530/article/details/123433934
public static void main(String[] args) {
    int[] arr =  {0,1,2,3,4};
    int[] nums = {0,1};
    ListNode head = help(arr);
    Solution.numComponents(head,nums);
}
public static class Solution {
    public static int numComponents(ListNode head, int[] nums) {
        
    }
}