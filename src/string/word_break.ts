/**
 * Reference : https://leetcode.com/problems/word-break/
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.

Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
 */

export const main = (s: string, dict: string[]): boolean => {
    // copy dictionary to set to impove word look time complexity
    const set = new Set<string>();
    for (const word of dict) {
        set.add(word.toLowerCase())
    }

    const bf = brutforce(s,set)
    const dp = dynamic(s, set);
    console.log(`bruteForce => ${bf}, dp => ${dp}`)
    return bf;
}

const dynamic = (s: string, set: Set<string>): boolean => {
   const arr = new Array(s.length+1).fill(0);
   arr[0] = 1;
   for (let i = 1; i <= s.length; i++) {
       for (let j = 0; j < i; j++) {
           if(arr[j]) {
               const sub = s.substring(j,i);
               if(set.has(sub)) {
                   arr[i] = 1;
                   break;
               }
           }
       }
   }
//    console.log(arr);
   return arr[s.length]>0;
}

const brutforce = (s: string, set: Set<string>): boolean => {
    if(s.length == 0) return true;
    if(set.has(s)) {
        return true;
    }
    for (let i = 1; i < s.length; i++) {
       const sub = s.substring(0,i);
       if(set.has(sub)) {
           if(brutforce(s.substring(i), set)) {
               return true;
           }
       }
    }
    return false;
}
const dict1 = ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 
    'cream', 'icecream', 'man', 'go', 'mango', 'How', 'are', 'you']

main('howareyoumangoman', dict1)
main('howareyoumengoman', dict1)