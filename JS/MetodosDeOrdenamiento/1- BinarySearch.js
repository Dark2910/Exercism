/**
 *  Instructions
 * 
 *  Your task is to implement a binary search algorithm.
 *  
 *  A binary search algorithm finds an item in a list by repeatedly splitting it in half,
 *  only keeping the half which contains the item we're looking for.
 *  It allows us to quickly narrow down the possible locations of our item until we find it,
 *  or until we've eliminated all possible locations.
 */

/**
 *  Caution
 *  Binary search only works when a list has been sorted.
 */

/**
 *  The algorithm looks like this:
 *  
 *  - Find the middle element of a sorted list and compare it with the item we're looking for.
 *  - If the middle element is our item, then we're done!
 *  - If the middle element is greater than our item, we can eliminate that element and all the elements after it.
 *  - If the middle element is less than our item, we can eliminate that element and all the elements before it.
 *  - If every element of the list has been eliminated then the item is not in the list.
 *  - Otherwise, repeat the process on the part of the list that has not been eliminated.
 */

/**
 * Here's an example:
 *  
 *  Let's say we're looking for the number 23 in the following sorted list: [4, 8, 12, 16, 23, 28, 32].
 *  
 *  - We start by comparing 23 with the middle element, 16.
 *  - Since 23 is greater than 16, we can eliminate the left half of the list, leaving us with [23, 28, 32].
 *  - We then compare 23 with the new middle element, 28.
 *  - Since 23 is less than 28, we can eliminate the right half of the list: [23].
 *  - We've found our item.
 */


const binarySearch = function(array, element, start, end){
    const arrayCopy = Array.from(array).sort((a, b) => a - b);
    start = start ?? 0;  
    end = end ?? arrayCopy.length - 1;

    if(start <= end){
        const mid = Math.floor((start + end) / 2);

        if(arrayCopy[mid] === element){
            return mid;
        }

        if(arrayCopy[mid] < element) {
            return find(arrayCopy, element, mid + 1, end);
        }else{
            return find(arrayCopy, element, start, mid - 1);
        }
    }

    throw new Error("Value not in array");
}

list = [1, 3, 4, 6, 8, 9, 11];
console.log(find(list, 7));