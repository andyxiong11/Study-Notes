public class Solution1876 {
    public static void main(String[] args) {
        System.out.println(Solution1876.countGoodSubstrings("abc"));;
    }
    public static int countGoodSubstrings(String s) {
        int n = 0;
        if(s.length()>=3){
            for(int i = 0;i<s.length()-2;i++){
            if((s.charAt(i) != s.charAt(i+1))&&(s.charAt(i+2) != s.charAt(i+1))&&(s.charAt(i) != s.charAt(i+2))){
                n++;
                }
            }
        }
        return n;
    }
}