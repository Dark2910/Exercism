/**
 *  About Arrays
 *  
 *  In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types. 
 *  It includes the length property and also lots of useful methods for traversing and mutating the array.
 *  
 *  To create an array, add elements between square brackets []. 
 *  To read from the array, put the index in square brackets [] after the identifier.
 *  The indices of an array start at zero.
 *  
 *  For example:
 *  const names = ['Jack', 'Laura', 'Paul', 'Megan'];
 *  names[1]; // => Laura
 * 
 *  Arrays can also be created using the constructor syntax, but for most uses, the array literal syntax is recommended.
 *  
 *  const names = new Array();
 *  names.push('Jack', 'Laura', 'Paul', 'Megan');
 *  names[1]; // => Laura
 * 
 *  Arrays cannot use strings as element indexes but must use integers (number). 
 *  Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element 
 *  from the array list itself, but will set or access a variable associated with that array's object property collection. 
 *  The array's object properties and list of array elements are separate, and the array's traversal and mutation operations 
 *  cannot be applied to these named properties.
 * 
 *  const names = ['Jack', 'Laura', 'Paul', 'Megan'];
 *  names.length; // => 4
 * 
 *  names.magician = 'Elyse';
 *  names.length; // => 4
 * 
 *  names; // => ["Jack", "Laura", "Paul", "Megan", magician: "Elyse"]
 *  However, be aware. Properties added via non-numeric keys are not part of the array's internal list, and are not traversed or
 *  mutated when using one of the traversal or mutation operations.
 */

/**
 *  Deleting items from an array
 * 
 *  Arrays in JavaScript are regular objects, and items can be deleted using the delete keyword.
 *  However, this does not change the length of the array and leaves a hole of empty. In other languages, 
 *  this is similar to a sparse array. The empty holes are skipped when using traversal or mutation operations.
 * 
 *  const names = ['Jack', 'Laura', 'Paul', 'Megan'];
 *  delete names[1];
 *  names; // =>  ["Jack", empty, "Paul", "Megan"]
 *  names.length; // => 4
 * 
 * 
 *  If there should be no holes, and if the length should reflect the number of items that will be traversed or mutated, 
 *  use splice instead. This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * 
 *  const names = ['Jack', 'Laura', 'Paul', 'Megan'];
 *  names.splice(1, 1);
 *  names; // =>  ["Jack", "Paul", "Megan"]
 *  names.length; // => 3
 */

/**
 *  Array length can be mutated
 * 
 *  When the length is increased, it creates empty holes, that are not considered when traversing or mutating the array.
 *  When the length is decreased, it removes the elements at the end of the array.
 * 
 *  const names = ['Jack', 'Laura', 'Paul', 'Megan'];
 *  names.length = 6;
 *  names; // => ["Jack", "Laura", "Paul", "Megan", empty × 2]
 *  names.length = 2; // =>  ["Jack", "Laura"]
 */

/**
 *  Checking if something is an Array
 * 
 *  Because arrays are objects, typeof names gives "object".
 *  To check if something is an Array, use Array.isArray:
 * 
 *  const names = ['Jack', 'Laura', 'Paul', 'Megan'];
 *  typeof names; // => "object"
 *  Array.isArray(names); // => true
 *  
 * const object = {};
 *  Array.isArray(object); // => false
 */

/**
 *  Array Methods
 * 
 *  The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 *  
 *  The push() method adds one or more elements to the end of an array and returns the new length of the array.
 *  
 *  The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
 *  
 *  The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
 *  
 *  The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Retrieve a card from a stack
 * 
 *  To pick a card, return the card at index position from the given stack.
 */

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
const getItem = (cards, position) => {
    return cards[position];
}

let position = 2;
getItem([1, 2, 4, 1], position); // => 4

/**
 *  Exchange a card in the stack
 * 
 *  Perform some sleight of hand and exchange the card at index position with the replacement card provided.
 *  Return the adjusted stack.
 */

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
const setItem = (cards, position, replacementCard) => {
    cards.splice(position,1,replacementCard);
    return cards;
}

position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard); // => [1, 2, 6, 1]

/**
 *  Insert a card at the top of the stack
 * 
 *  Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.
 */

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
const insertItemAtTop = (cards, newCard) => {
    cards.push(newCard);
    return cards;
}

let newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard); // => [5, 9, 7, 1, 8]

/**
 *  Remove a card from the stack
 * 
 *  Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.
 */


/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
const removeItem = (cards, position) => {
    cards.splice(position, 1);
    return cards;
}

position = 2;
removeItem([3, 2, 6, 4, 8], position); // => [3, 2, 4, 8]

/**
 *  Remove the top card from the stack
 * 
 *  Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.
 */

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
const removeItemFromTop = (cards) => {
    cards.pop();
    return cards;
}

removeItemFromTop([3, 2, 6, 4, 8]); // => [3, 2, 6, 4]

/**
 * Insert a card at the bottom of the stack
 * 
 * Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.
 */

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
const insertItemAtBottom = (cards, newCard) => {
    cards.unshift(newCard);
    return cards;
}

newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard); // => [8, 5, 9, 7, 1]

/**
 *  Remove a card from the bottom of the stack
 *  
 *  Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.
 */

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
const removeItemAtBottom = (cards) => {
    cards.shift();
    return cards;
}

removeItemAtBottom([8, 5, 9, 7, 1]); // => [5, 9, 7, 1]

/**
 *  Check the size of the stack
 * 
 *  Check whether the size of the stack is equal to stackSize or not.
 */

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
const checkSizeOfStack = (cards, stackSize) => {
    return(cards.length === stackSize);
}

const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize); // => false