public class Solution {
    public static void main(String[] args) {
        System.out.println(Solution.isPalindrome(100));;
    }
    public static boolean isPalindrome(int x) {
        //第二种
        boolean flag = false;
        String str =String.valueOf(x);
        int l = str.length();
        int y = 0;
        int x1 = x;
        if(x == 0){
            flag = true;
        }
        else if((x%10) != 0){
            while(x1>y){
                int g = x1 % 10;
                x1 /= 10;
                y = y*10 + g;
            }
            if(l%2 == 0){
                if(x1 == y){
                    flag = true;
                }
            }
            else{
                if(x1 == (y/10)){
                    flag = true;
                }
            }
        //第一种解法
        // boolean flag = false;
        // String str =String.valueOf(x);
        // int l = str.length();
        // if(x>0){
        //     for(int i = 0;i < (l/2); i++){
        //         if(flag == false){
        //             break;
        //         }
        //         while(i != (l/2)){
        //             if(str.charAt(i) == str.charAt(l-i-1)){
        //                 break;
        //             }
        //             else
        //                 flag = false;
        //                 break;
        //         }
        //     }
        // }
        // else if(x<0){
        //     flag =false;
        // }
        return flag;
    }
}