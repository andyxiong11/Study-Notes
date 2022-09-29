public class Solution {
    public static void main(String[] args) {
        System.out.println(Solution.isFlipedString("",""));
    }
    public static boolean isFlipedString(String s1, String s2) {
        int l1 = s1.length();
        int l2 = s2.length();
        String newS2="";
        boolean flag = false;
        if((s1 == "") && (s2 == "")){
            return flag=true;
        }
        if(l1 == l2){
            for(int i = 0;i<l2;i++){
                if(s2.charAt(i) == s1.charAt(0)){     
                    if(s1.charAt(l2-i-1) == s2.charAt(l2-1)){
                        newS2 = s2.substring(i,l2) + s2.substring(0,i);
                        if(s1.equals(newS2)){
                            flag = true;
                            break;
                        }
                    }
                }
            } 
            //System.out.println((newS2));
        }
        return flag;
    }
}