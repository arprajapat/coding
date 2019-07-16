/**
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

    Only one letter can be changed at a time.
    Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

    Return 0 if there is no such transformation sequence.
    All words have the same length.
    All words contain only lowercase alphabetic characters.
    You may assume no duplicates in the word list.
    You may assume beginWord and endWord are non-empty and are not the same.

Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

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
    const hm  = new Map<string, number>();

    wordList.map((val) => hm.set(val, -1))
    
    // No need check check further if target word in not in wordList
    if(!hm.has(endWord)) {
        return 0;
    }
    
    const queue : string[] = [];
    queue.push(beginWord);
    hm.set(beginWord, 1);
    
    // array of all allowed characters 
    const alph = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); 

    let itr = 0;
    while (itr < queue.length) {
        const word = queue[itr++];
        if(word == endWord) {
            return hm.get(word);
        }
        else {
            for(let i = 0; i < word.length; i++) {
                for(let j = 0; j < alph.length; j++) {

                    const newWord = word.substring(0, i) + alph[j] + word.substring(i+1);

                    if(hm.has(newWord) && hm.get(newWord) == -1) {
                        queue.push(newWord);
                        hm.set(newWord, hm.get(word)+1);
                    }
                    
                }
            }
        }
    }
    return 0
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

console.log(main(
    "toon", 
    "plea",
    ["poon","plee", 'same', 'poie', 'plea', 'plie', 'poin']
));
