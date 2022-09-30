public class Solution0108 {
    public static void main(String[] args) {
        int[][] num = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
        Solution0108.setZeroes(num);
    }
    public static void setZeroes(int[][] matrix) {
        int[][] num0 = new int[matrix.length][matrix[0].length];
        for(int i = 0;i<matrix.length;i++){
            for(int j = 0;j<matrix[0].length;j++){
                if(matrix[i][j] == 0){
                    for(int k = 0;k<num0[0].length;k++){
                        num0[i][k] = 1;
                    }
                    for(int l = 0;l<num0.length;l++){
                        num0[l][j] = 1;
                    }
                }
            }
        }
        for(int i = 0;i<num0.length;i++){
            for(int j = 0;j<num0[0].length;j++){
                if(num0[i][j] == 1){
                    matrix[i][j] = 0;
                }
            }
        }
        // for(int i = 0;i<matrix.length;i++){
        //     for(int j = 0;j<matrix[i].length;j++){
        //         System.out.print("{"+matrix[i][j]+"},");
        //         if(j == (matrix[i].length-1)){
        //             System.out.println();
        //         }
        //     }
        // }
    }
}