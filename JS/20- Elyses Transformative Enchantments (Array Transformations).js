/**
 *  About Array Transformations 
 * 
 *  In JavaScript, the Array class has many powerful built-in methods for transforming arrays.
 *  These methods make it much easier to convert one array into another than it otherwise
 *  would be using a simple for loop or more direct manipulation.
 *  
 *  Some methods are pure, meaning that they do not modify the original array.
 *  They return a new one instead. Other methods however manipulate the array they are
 *  called on and do not return the modified array.
 */

/**
 *  - map (pure)
 * 
 *  Create a new array by transforming each element according to a function passed as an argument.
 *  These callback functions are often written as arrow functions.
 * 
 *  let arr = [1, 2, 3, 4];
 *  const newArr = arr.map((value) => value - 1);
 *  console.log(newArr); // => [0, 1, 2, 3] 
 *  console.log(arr); // => [1, 2, 3, 4]
 */

/**
 *  - filter (pure)
 * 
 *  Creates an array by filtering the current one, given a filtering function
 *  (that returns true if the element should be kept and false if it should be removed).
 * 
 *  let arr = [1, 2, 3, 4];
 *  arr.filter((value) => value % 2 === 0); // => [2, 4]
 */

/**
 *  - reduce (pure)
 * 
 *  Reduces the array to a single value using a function that takes an accumulator and the current
 *  element of the array as parameters. This function instructs how the current element must be 
 *  merged into the accumulator and returns the accumulator that will be used on the next iteration.
 * 
 * let arr = [1, 2, 3, 4];
 *  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // => 10
 */

/**
 *  - reverse
 * 
 *  Reverses the elements of an array.
 *  
 *  const arr = [1, 2, 3, 4];
 *  arr.reverse(); // => [4, 3, 2, 1]
 */

/**
 *  - slice (pure)
 * 
 *  Given a start and an end index, creates a sub-array from the array it is called on.
 * 
 *  The element at the end index will not be included.
 *  Also, all parameters are optional: the start index defaults to 0, and the end index defaults to the array length.
 *  
 *  const arr = [1, 2, 3, 4];
 * 
 *  arr.slice(1, 2); // => [2]
 *  arr.slice(1); // => [2, 3, 4]
 * 
 *      You can also use negative numbers, that represent the indexes 
 *      starting from the end of the array
 *  arr.slice(-2); // => [3, 4]
 */

/**
 *  - splice
 * 
 *  Removes or replaces and/or adds new elements of an array.
 *  
 *  It takes the following parameters:
 *  
 *      - the index of the element where to start modifying the array
 *      - the number of elements to delete
 *      - the elements to insert in the array (optional)
 * 
 *  splice returns the elements that have been removed.
 * 
 *  const arr = ['1', '2', '5', '6'];
 * 
    // Insert an element at index 2
 *  arr.splice(2, 0, '3');
 *  console.log(arr); // => ['1', '2', '3', '5', '6']
 *  
    // Remove 2 elements, starting at index 3 and insert 2 elements
 *  const removed = arr.splice(3, 2, '4', '5');
 *  console.log(removed); // => ['5', '6']
 *  console.log(arr); // => ['1', '2', '3', '4', '5']
 *  
    // Remove 1 element at index 1
 *  arr.splice(1, 1);
 *  console.log(arr); // => ['1', '3', '4', '5']
 */

/**
 *  - sort
 * 
 *  By default, sort sorts the elements of an array by first converting them to strings and then
 *  applying string comparison (see Concept Comparison). The sorting happens in-place which means
 *  the original array is modified. sort also returns that modified array which is convenient if you
 *  want to chain other methods to it.
 * 
 *  const arr = ['c', 'a', 'z', 'b'];
 *  const result = arr.sort();
 *  console.log(result); // => ['a', 'b', 'c', 'z']
 *  console.log(arr); // => ['a', 'b', 'c', 'z']
 * 
 *  To customize the sorting behavior, you can pass a comparison function as an argument.
 *  The comparison function itself is called with two arguments which are two elements of the array.
 *  It then needs to return the following:
 * 
 *      - a negative number if the first argument should be sorted before the second
 *      - a positive number if the first argument should be sorted after the second
 *      - 0 if the order of the elements should stay the same
 *
 *  For example, to sort numbers the following comparison function can be used.
 * 
 *  const arr = [3, 1, 2, 10];
 *  arr.sort((a, b) => a - b);
    // => [1, 2, 3, 10]
    // "a - b" is negative when b is greater than a, positive when 
    // a is greater than b and 0 when they are equal.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Double every single card
 * 
 *  Elyse wants to double the number of every card in the deck.
 *  This may result in higher cards than 1-10.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number[]}
 */
const seeingDouble = function(deck){
   return deck.map(value => value * 2);
}

let deck = [1, 2, 3, 4, 10];
seeingDouble(deck); // => [2, 4, 6, 8, 20]

/**
 *  Create multiple copies of every 3 found in the deck
 * 
 *  Elyse wants to triplicate every 3 found in the deck.
 *  If a deck started with a single 3, after the trick the deck would have three 3's in place of the original.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number[]}
 */
const threeOfEachThree = (deck) => {
   return deck.flatMap((num) => (num === 3 ? Array.from({ length: 3 }).fill(3) : num));

   const result = new Array();
   for (let index = 0; index < deck.length; index++) {
      if(deck[index] === 3){
         result.push(...[3,3]);
      }
      result.push(deck[index]);
   }
   return result
}

deck = [1, 3, 9, 3, 7];
threeOfEachThree(deck); // => [1, 3, 3, 3, 9, 3, 3, 3, 7]

/**
 *  Find two cards from the exact middle of the deck
 * 
 *  Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number[]}
 */
const middleTwo = function(deck) {
   const middleIndex = Math.floor(deck.length / 2);

   if(deck.length % 2 === 0) {
      return deck.slice(middleIndex - 1, middleIndex + 1)
      //return [deck.slice(0, Math.floor(deck.length / 2)).pop(), deck.slice(Math.floor(deck.length / 2)).shift()]
   }

   return [deck[middleIndex]];
}

deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
middleTwo(deck); // => [5, 6]

/**
 *  The outside two cards will reappear in the middle of the deck
 * 
 *  Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.
 * 
 *  You can assume that the deck has an even number of cards.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number[]}
 */
const sandwichTrick = (deck) => {
   if(deck.length % 2 !== 0){
      return deck
   }

   const cards = [deck.pop(), deck.shift()]
   deck.splice(deck.length / 2, 0, ...cards);

   return deck
}

deck = [1, 2, 3, 5, 6, 10];
//sandwichTrick(deck); // => [2, 3, 10, 1, 5, 6]
console.log(sandwichTrick(deck));

/**
 *  Every card that isn't 2 disappears
 *  
 *  Elyse's favorite number today is 2.
 *  In this trick, every card that isn't a 2 will disappear from the deck.
 */

/* 
deck = [1, 2, 3, 4, 10, 2];
twoIsSpecial(deck); // => [2, 2]
 */

/**
 *  Convert a shuffled deck into a perfectly ordered deck
 * 
 *  Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.
 */

/* 
deck = [10, 1, 5, 3, 2, 8, 7];
perfectlyOrdered(deck); // => [1, 2, 3, 5, 7, 8, 10]
 */

/**
 *  Reorder the deck
 *  
 *  Elyse wants to change the order of the cards in the deck.
 *  After the trick, the card that is currently at the top should end up at the bottom of the deck.
 *  The second card should end up second last etc.
 */

/* 
deck = [10, 1, 5, 3, 2];
reorder(deck); // => [2, 3, 5, 1, 10]
 */
