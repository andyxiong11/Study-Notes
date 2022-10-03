public class Solution777 {
    public static void main(String[] args) {
        //System.out.println(Solution777.canTransform("XLLR", "LXLX"));
        System.out.println(Solution777.canTransform("RXXLRXRXL", "XRLXXRRLX"));
    }

    public static boolean canTransform(String start, String end) {
        boolean flag = true;
        if (start.length() == end.length()) {
            if (start.length() < 2 && (start.charAt(0) != end.charAt(0))) {
                return flag = false;
            } else {
                for (int l = 0; l < start.length(); l++) {
                    if ((start.charAt(l) != end.charAt(l))&& l+1<start.length()) {
                        if (start.charAt(l) != end.charAt(l + 1)) {
                            return flag = false;
                        } else if ((start.charAt(l + 1) == end.charAt(l))) {
                            l++;
                        } else {
                            return flag = false;
                        }
                    }else if(l+1>=start.length()){
                        return flag=false;
                    }
                }
            }
        }
        return flag;
    }
}