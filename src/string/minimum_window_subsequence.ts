/**
 Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.
Example 1:

Input:
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation:
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
 */
/**
 * 
 * @param s string
 * @param t string
 * @returns string
 */

export const main = (s: string, t: string) => {
    const res1 =  bruteForce(s,t);
    const res = dynamic(s,t);
    console.log(`[ ${s}, ${t} ] => ${res}`, res == res1);
    return res1;
}

/**
 *  Time complexity O(n^2) where n is length of source string
 * @param s 
 * @param t 
 */
const bruteForce = (s: string, t: string) => {
    let res: string = '';
    let start: number = 0;

    while(start < s.length-3) {
        let j = 0;
        for (let i = start; i < s.length; i++) {
            if(t[j] ==  s[i] && j == 0) {
                start = i;
                // console.log('start', start);
            }
            if(t[j] == s[i]) {
                j++;
            }

            if(j == t.length) {
                if(res == '' || res.length > (i-start+1)) {
                    res = s.substring(start, i+1)
                }
                start++;
                break;
            }

            if(i == s.length-1) {
                return res;
            }
        }
    }
    return res;
}

export const dynamic = (s: string, t: string) => {
    if(!s.length || !t.length || s.length < t.length) return "";
    const m = t.length;
    const n = s.length;
    const arr = new Array(m+1);
    for (let i = 0; i < arr.length; i++) {
       arr[i] = new Array(n+1).fill(0);
    }

    for (let j = 0; j <=n; j++) {
        arr[0][j] = j+1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(t[i-1] == s[j-1]) {
                arr[i][j] = arr[i-1][j-1];
            }
            else {
                arr[i][j] = arr[i][j-1];
            }
        }
    }
    let min = -1;
    let res = '';
    for(let j = 1;j<=n;j++) {
        if(arr[m][j] != 0) {
            const curr = arr[0][j]-arr[m][j]
            if(min == -1 || curr < arr[0][min]-arr[m][min]) {
                min = j;
                res = s.substring(arr[m][j]-1, arr[0][j]-1)
            }
        }
    }
    return res;

}

main('abcdebdddebde', 'bde');
main('jmeqksfrsdcmsiwvaovztaqenprpvnbstl', 'fst')