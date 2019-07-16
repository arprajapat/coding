export const main = (s: string) => {
    recursiveDistinct(s);
    // recursiveAll(s);
}

/**
 * This will give all distinct subsequences
 * Time complexity O(2^n);
 * @param s 
 * @param hm 
 */
const recursiveDistinct = (s: string, hm = new Map<string, boolean>()) => {
    if(hm.has(s) || s.length ==0) {
        return;
    }

    console.log(s);
    hm.set(s, true);
    for (let i = 0; i < s.length; i++) {
        recursiveDistinct(s.substring(0,i)+s.substring(i+1), hm);
    }
}

/**
 * This will give all distinct subsequences
 * Time complexity O(2^n);
 * @param s 
 * @param curr 
 */
const recursiveAll = (s: string, curr: string = '') => {
    if(s.length == 0) {
        console.log(curr);
        return;
    }

    recursiveAll(s.substring(1), curr);
    recursiveAll(s.substring(1), curr+s[0]);
}


main('ABCDEF')
main('rabbbit')