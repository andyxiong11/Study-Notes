public class Solution {
    public static void main(String[] args) {
        String s1 = new String("IV");
        System.out.println(Solution.romanToInt(s1));;
    }
    public static int romanToInt(String s) {
        int l = s.length();
        int num = 0;
        int[] allNum= new int[l];
        for (int i = 0; i < l; i++) {
            switch (s.charAt(i)) {
                case 'I':
                    allNum[i] = 1;
                    break;
                case 'V':
                    allNum[i] = 5;
                    break;
                case 'X':
                    allNum[i] = 10;
                    break;
                case 'L':
                    allNum[i] = 50;
                    break;
                case 'C':
                    allNum[i] = 100;
                    break;
                case 'D':
                    allNum[i] = 500;
                    break;
                case 'M':
                    allNum[i] = 1000;
                    break;
            }
            //System.out.println(allNum[i]);
            if((i>=1) && (allNum[i]>allNum[i-1])){
                num = num - allNum[i-1] - allNum[i-1] + allNum[i];
            }else{
                num += allNum[i];
            }
        }
        return num;
    }
}