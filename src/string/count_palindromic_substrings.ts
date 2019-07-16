/**
 * Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */

export const main = (s: string) => {
    if(!s.length || s.length == 1) return s.length;
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        count += extendPalindrome(s, i, i);
        count += extendPalindrome(s, i, i+1);
    }
    console.log(count)
    return count;
}

const extendPalindrome = (s: string, i: number, j:number): number => {
    let count = 0;
    while(i >= 0 && j < s.length && s[i] === s[j]) {
        count++;
        i--;
        j++;
    }
    return count;
}

main('babad');
main('abc')
main('aaa');