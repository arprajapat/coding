import { Queue } from "../DataType/Queue";

/**
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

    Only one letter can be changed at a time
    Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

    Return an empty list if there is no such transformation sequence.
    All words have the same length.
    All words contain only lowercase alphabetic characters.
    You may assume no duplicates in the word list.
    You may assume beginWord and endWord are non-empty and are not the same.

Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]

Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

 */

/**
 * Time Complexity  O(word length * word count in dictionary) 
 * but fairly can assume that word length will be small so => O(n)
 * @param beginWord 
 * @param endWord 
 * @param wordList 
 */
export const main = (beginWord: string, endWord: string, wordList: string[]) => {
    const hm  = new Map<string, {level: number, list: string[]}>();

    wordList.map((val) => hm.set(val, null))
    
    // No need check check further if target word in not in wordList
    if(!hm.has(endWord)) {
        return [];
    }
    
    const queue = new Queue<string>();
    queue.add(beginWord);
    hm.set(beginWord,{level: 1, list: []});
  
    // array of all allowed characters 
    const alph = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); 

    while (!queue.isempty()) {
        const word = queue.poll();
        if(word == endWord) {
            return helper(hm, beginWord, endWord);
        }
        else {
            for(let i = 0; i < word.length; i++) {
                for(let j = 0; j < alph.length; j++) {

                    const newWord = word.substring(0, i) + alph[j] + word.substring(i+1);
                    if(hm.has(newWord) && hm.get(newWord) == null) {
                        queue.add(newWord);
                        const l = hm.get(word).level
                        hm.set(newWord, {level: l+1, list: [word]});
                    }
                    else if(hm.has(newWord) && hm.get(newWord).level == hm.get(word).level+1) {
                        hm.get(newWord).list.push(word)
                    }
                }
            }
        }
    }
    return []
}

export const helper = (hm: Map<string, {level: number, list: string[]}>, beginWord: string, endWord: string): string[][] => {
    if(beginWord == endWord) return [[beginWord]];
    const list: string[][] = [];
    for(let word of hm.get(endWord).list) {
        const tempArr = helper(hm, beginWord, word);
        for(let temp of tempArr) {
            list.push(temp.concat(endWord));
        }
    }
    return list
}
console.log(main(
    "hit", 
    "cog",
    ["hot","dot","dog","lot","log","cog"]
));

console.log(main(
    "hot", 
    "dog",
    ["hot","dog"]
));