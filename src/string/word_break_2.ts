/**
 * Reference : https://leetcode.com/problems/word-break-ii/
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.

Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]

Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.

Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
 */
export const main = (s: string, dict: string[]) => {
    // copy dictionary to set to impove word look time complexity
    const set = new Set<string>();
    for (const word of dict) {
        set.add(word.toLowerCase())
    }
    return dynamic(s, set);
}

const dynamic = (s: string, set: Set<string>) => {
    
    const arr = new Array(s.length+1).fill(0);
    const hm = new Map<number, number[]>()
    arr[0] = 1;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const sub = s.substring(j,i);
            // console.log(sub);
            if(arr[j] && set.has(sub)) {
                arr[i] = 1;
                if(!hm.has(i)) {
                    hm.set(i, [])
                }
                hm.get(i).push(j);
            }
        }
    }
    // array of all possible word break combination
    const temp : number[][] = findWords(hm, arr.length-1);
    const out: string[][] = [];
    //convert all word break combination into words
    for (const item of temp) {
        const strTemp: string[] = [];
        for (let i = 1; i < item.length; i++) {
            strTemp.push(s.substring(item[i-1], item[i]))
        }
        out.push(strTemp)
    }
    console.log(out);
}

const findWords = (hm: Map<number, number[]>, key: number): number[][] => {
    // console.log(key);
    
    if(key == 0) return [[0]];
    if(!hm.has(key)) return [];
    const temp = hm.get(key);
    const arr: number[][] = [];
    for (const item of temp) {
        const out = findWords(hm, item);
        for (const elm of out) {
            elm.push(key);
            arr.push(elm)
        }
    }
    return arr;
}

const dict1 = ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 
    'cream', 'icecream', 'man', 'go', 'mango', 'mang','o','how', 'are', 'you']
main('howareyoumangoman', dict1)