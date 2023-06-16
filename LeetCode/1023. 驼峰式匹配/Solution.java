class Solution {
    public List<Boolean> camelMatch(String[] queries, String pattern) {
        int i = 0;
        boolean[] boo;
        while(i<queries.length){//i 字符串数组角标
            String queriesStr = queries[i];
            int k = 0;//k 字符串数组中的字符串角标
            for(int j = 0;j<pattern.length;j++){//j 字符串角标
                if(pattern.charAt(j) == queriesStr.charAt(k)){
                    k++;
                    continue;
                }else if(queriesStr.charAt(k)<'A'){
                    if(k == (queries.length-1)){
                        boo[i] = false;
                        break;
                    }
                    continue;
                }
            }
            i++;
        }
    }
}
public static void main() {
    String[] queries = {"FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"};
    Solution.camelMatch(queries,"FB");
}