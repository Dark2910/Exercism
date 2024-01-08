/**
 *  JavaScript has an increment and a decrement operator. 
 *  They modify a variable in place. ++ adds one to a number, -- subtracts one from a number.
 * 
 *  let i = 3;
 *  i++; // i is now 4
 *  
 *  let j = 0; 
 *  j--; // j is now -1
 * 
 *  The example above shows the postfix increment/decrement operator.
 *  In this case the operator is placed after the variable and the return value of the expression is the value of 
 *  the variable before the increase/decrease.
 *  
 *  let a = 3; 
 *  let b = a++; // a = 4 and b = 3
 * 
 *  There is also the prefix variant where the operator is placed before the variable. 
 *  Then the return value is the value of the variable after the increase/decrease.
 * 
 *  let a = 3; 
 *  let b = ++a; // a = 4 and b = 4
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Determine the total number of birds that you counted so far
 * 
 *  Let us start analyzing the data by getting a high-level view. 
 *  Find out how many birds you counted in total since you started your logs.
 * 
 *  Implement a function totalBirdCount that accepts an array that contains the bird count per day. 
 *  It should return the total number of birds that you counted.
 */

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
const totalBirdCount = (birdsPerDay) => {
    let c = 0;
    for (const i in birdsPerDay) {
        c += birdsPerDay[i];
    }
    return c;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount(birdsPerDay); // => 34

/**
 *  Calculate the number of visiting birds in a specific week
 * 
 *  Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.
 * 
 *  Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. 
 *  It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.
 */

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
const birdsInWeek = (birdsPerDay, week) => {
    let daysWeek = (week * 7) - 7;
    let suma = 0;
    let contador = 0;

    while(contador < 7){
        suma += birdsPerDay[daysWeek];
        daysWeek += 1;
        contador += 1;
    }
    return suma;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2); // => 12

/**
 *  Fix a counting mistake
 * 
 *  You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner 
 *  of the garden. You figured out that this bird always spent every second day in your garden. 
 *  You do not know exactly where it was in between those days but definitely not in your garden. 
 *  Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.
 * 
 *  Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument.
 *  It should correct the counting mistake and return the modified array.
 */

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
const fixBirdCountLog = (birdsPerDay) => {
    for(let i = 0; i < birdsPerDay.length; i+=2){
        birdsPerDay.splice(i,1,(birdsPerDay[i] + 1))
    }   
    return birdsPerDay
}

birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay); // => [3, 5, 1, 7, 5, 1]