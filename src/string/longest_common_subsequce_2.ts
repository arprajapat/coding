/**
 * @param s1 
 * @param s2 
 * @returns {string}
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
        return '';
    
    if(s1[0] == s2[0]) {
        return s1[0]+recursive(s1.substring(1), s2.substring(1));
    }
    else {
        const s1Max = recursive(s1, s2.substring(1));
        const s2max = recursive(s1.substring(1), s2);
        return s1Max.length<s2max.length ? s2max : s1Max;
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
    let i = m, j = n;
    let res = '';
    while (i > 0 && j > 0) {
        if (arr[i][j] != arr[i][j - 1] && s1[i-1] == s2[j-1]) {
            res = s1[i - 1]+res;
            i--;
            j--;
        }
        else if (arr[i][j] != arr[i][j - 1]) {
            i--;
        }
        else {
            j--;
        }
    }

    return res;

}

console.log(main('ABCDGH', 'AEDFHR'));
// console.log(main('AGGTAB', 'GTAB'));
// console.log(main('ABA', 'BABA'));
