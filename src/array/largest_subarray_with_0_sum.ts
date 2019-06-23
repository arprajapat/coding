/**
 * 
 * Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23};
 * Output: 5
 * The largest subarray with 0 sum is -2, 2, -8, 1, 7
 * 
 * Input: arr[] = {1, 2, 3}
 * Output: 0
 * There is no subarray with 0 sum
 * 
 * Input: arr[] = {1, 0, 3}
 * Output: 1
 * 
 */

 /**
  * create a hashmap with <key value> <cumulative sum, first_occurance_index>
  * */


//   const cumulativeSum = (sum => value => sum += value)(0);

  export const main = (arr: number[]) => {

    let maxSubArrLength = 0;
    let sum = 0;
    const map = new Map<number, number >();

    arr.forEach((value, index) => {
        sum += value;
        if(map.has(sum)) {
            maxSubArrLength = Math.max(index - map.get(sum))
        }
        else {
            map.set(sum, index);
        }
    });
    
    return maxSubArrLength;
  };
