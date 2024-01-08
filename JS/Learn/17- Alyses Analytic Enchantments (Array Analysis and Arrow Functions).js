/**
 *  Array Analysis
 * 
 *  Arrays have built-in methods to analyse the contents of the array.
 *  Most of these methods take a function that returns true or false as an argument.
 *  Such a function is called a predicate.
 * 
 *  The built-in methods are meant to be used instead of a for loop or the built-in forEach method:
 * 
 *  Example of analysis using a for loop :
 * 
 *  const numbers = [1, 'two', 3, 'four'];
 *     for (var i = 0; i < numbers.length; i++) {
 *       if (numbers[i] === 'two') {
 *         return i;
 *       }
 *  } // => 1
 * 
 *  Example of analysis using a built-in method:
 * 
 *  const numbers = [1, 'two', 3, 'four'];
 *  numbers.indexOf('two'); // => 1
 */

/**
 *  - includes 
 * 
 *  The includes() method determines whether an array includes a certain value among its entries,
 *  returning true or false as appropriate.
 * 
 *  const numbers = [1, 'two', 3, 'four'];
 *  numbers.includes(1); // => true 
 *  numbers.includes('one'); // => false
 */

/**
 *  - every
 * 
 *  The every() method tests whether all elements in the array pass the test implemented by the provided function.
 *  It returns a Boolean value
 * 
 *  const numbers = [1, 3, 5, 7, 9];
 *  numbers.every((num) => num % 2 !== 0); // => true
 */

/**
 *  - some
 * 
 *  The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * 
 *  const numbers = [1, 3, 5, 7, 9];
 *  numbers.some((num) => num % 2 !== 0); // => true
 */

/**
 *  - find
 * 
 *  The find() method returns the value of the first element in the provided array that satisfies
 *  the provided testing function. If no values satisfy the testing function, undefined is returned.
 * 
 *  const numbers = [1, 3, 5, 7, 9];
 *  numbers.find((num) => num < 5); // => 1
 */

/**
 *  - findIndex 
 * 
 *  The findIndex() method returns the index of the first element in the array that satisfies
 *  the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 *  const numbers = [1, 3, 5, 7, 9];
 *  numbers.findIndex((num) => num > 7); // => 4 
 *  numbers.findIndex((num) => num > 9); // => -1
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Find the position of a card
 * 
 *  Elyse wants to know the position (index) of a card in the stack.
 */

/**
 * 
 * @param {number[]} deck 
 * @param {number} card
 * @returns {number|undefined} position of the card in the stack.
 */
const getCardPosition = (deck, card) => {
    return deck.indexOf(card)
}

let card = 2;
getCardPosition([9, 7, 3, 2], card); // => 3

/**
 *  Determine if a card is present
 * 
 *  Elyse wants to determine if a card is present in the stack -- in other words,
 *  if the stack contains a specific number.
 */

/**
 * 
 * @param {number[]} deck 
 * @param {number} card 
 * @returns {boolean} is a card present in the stack
 */
const doesStackIncludeCard = (deck, card) => {
    return deck.includes(card);
}

card = 3;
doesStackIncludeCard([2, 3, 4, 5], card); // => true

/**
 *  Determine if each card is even
 * 
 *  Elyse wants to know if every card is even -- in other words, if each number in the stack is an even number.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {boolean} is an even number
 */
const isEachCardEven = (deck) => {
    return deck.every(value => value % 2 === 0)
}

isEachCardEven([2, 4, 6, 7]); // => false

/**
 *  Check if the stack contains an odd-value card
 *  
 *  Elyse wants to know if there is an odd number in the stack.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {boolean} is an odd number in the stack
 */
const doesStackIncludeOddCard = (deck) => {
    return deck.some(value => value % 2 !== 0)
}

doesStackIncludeOddCard([3, 2, 6, 4, 8]); // => true

/**
 *  Get the first odd card from the stack
 * 
 *  Elyse wants to know the value of the first card that is odd.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number} value of the first card that is odd
 */
const getFirstOddCard = (deck) => {
    return deck.find(value => value % 2 !== 0)
}

getFirstOddCard([4, 2, 8, 7, 9]); // => 7

/**
 *  Determine the position of the first card that is even
 * 
 *  Elyse wants to know the position of the first card that is even.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number} position of the first card that is even.
 */
const getFirstEvenCardPosition = (deck) => {
    return deck.findIndex(value => value % 2 === 0)
}

getFirstEvenCardPosition([5, 2, 3, 1]); // => 1




