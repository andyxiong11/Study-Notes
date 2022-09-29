import java.util.HashMap;

public class Solution_leetcode {
    public static void main(String[] args) {
        String s1 = new String("MCMXCIV");
        System.out.println(Solution_leetcode.romanToInt(s1));;
    }
    public static int romanToInt(String s) {
        int l = s.length();
        int num = 0;
        HashMap<Character, Integer> Sites = new HashMap<Character, Integer>();
        Sites.put('I', 1);
        Sites.put('V', 5);
        Sites.put('X', 10);
        Sites.put('L', 50);
        Sites.put('C', 100);
        Sites.put('D', 500);
        Sites.put('M', 1000);
        for (int i = 0; i < l; i++) {
            if((i>=1) && (Sites.get(s.charAt(i))>Sites.get(s.charAt(i-1)))){
                num = num - Sites.get(s.charAt(i-1)) - Sites.get(s.charAt(i-1)) + Sites.get(s.charAt(i));
            }else{
                num += Sites.get(s.charAt(i));
            }
        }
        return num;
    }
}