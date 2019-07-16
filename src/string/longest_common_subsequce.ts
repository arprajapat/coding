/**
 * @param s1 
 * @param s2 
 * @returns {number}
 */
export const main = (s1: string, s2: string) => {
    // return recursive(s1, s2);
    return dp(s1, s2);
}

/**
 * Time complexity O(2^n)
 * @param s1 
 * @param s2 
 */
const recursive = (s1: string, s2: string) => {
    if(s1.length == 0 || s2.length == 0)
        return 0;
    
    if(s1[0] == s2[0]) {
        return 1+recursive(s1.substring(1), s2.substring(1));
    }
    else {
        return Math.max(
            recursive(s1, s2.substring(1)),
            recursive(s1.substring(1), s2)
        )
    }
}

/**
 * Time complexity O(m*n)
 * @param s1 
 * @param s2 
 */
const dp = (s1: string, s2: string) => {
    const m = s1.length;
    const n = s2.length;

    const arr = new Array(m+1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n+1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(s1[i-1] == s2[j-1]) {
                arr[i][j] = 1+ arr[i-1][j-1];
            }
            else {
                arr[i][j] = Math.max(
                    arr[i][j-1], 
                    arr[i-1][j]
                    );
            } 
        }  
    }
    return arr[m][n];

}

console.log(main('ABCDGH', 'AEDFHR'));
console.log(main('AGGTAB', 'GTAB'));
console.log(main('ABA', 'BABA'));