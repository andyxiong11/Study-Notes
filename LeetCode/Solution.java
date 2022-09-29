public class Solution {
    public static void main(String[] args) {
        System.out.println(Solution.isPalindrome(13421));;
    }
    public static boolean isPalindrome(int x) {
        boolean flag = true;
        String str =String.valueOf(x);
        int l = str.length();
        if(x>0){
            for(int i = 0;i < (l/2); i++){
                if(flag == false){
                    break;
                }
                while(i != (l/2)){
                    if(str.charAt(i) == str.charAt(l-i-1)){
                        break;
                    }
                    else
                        flag = false;
                        break;
                }
            }
        }
        else if(x<0){
            flag =false;
        }
        return flag;
    }
}