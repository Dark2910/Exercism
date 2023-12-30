/**
 *  Array [destructuring assignment][array_destructuring_docs] is a concise way of extracting values from
 *  an array. Its syntax is similar to an [array literal][array_literal_resource] expression,
 *  but on the left-hand side of the assignment instead of the right.
 * 
 *  const frenchNumbers = ['quatre-vingts', 'quatre-vingt-dix', 'cent'];
 *  const [french80, french90, french100] = frenchNumbers;
 *  french80; // => 'quatre-vingts'
 *  french90; // => 'quatre-vingt-dix'
 *  french100; // => 'cent'
 */

/**
 *  Rest operator
 * 
 *  When '...' appears on the left-hand side of an assignment,
 *  those three dots are known as the rest operator.
 *  The three dots together with a variable name is called a rest element. It collects zero or more values,
 *  and stores them into a single array.
 * 
 * const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];
 *  a; // => 0
 *  b; // => 1
 *  everythingElse; // => [1, 2, 3, 5, 8]
 * 
 *  Note that in JavaScript, unlike some other languages, a rest element cannot have a trailing comma.
 *  It must be the last element in a destructuring assignment. The example below throws a SyntaxError:
 * 
 *  const [...items, last] = [2, 4, 8, 16]
 */

/**
 *  Rest properties
 *  
 *  Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.
 * 
 *  const { street, ...address } = {
 *    street: 'Platz der Republik 1',
 *    postalCode: '11011',
 *    city: 'Berlin',
 *  };
 * 
 *  street; // => 'Platz der Republik 1' 
 *  address; // => {postalCode: '11011', city: 'Berlin'}
 */

/**
 *  Rest parameters
 * 
 *  When '...' appears in a function definition next to its last argument,
 *  that parameter is called a rest parameter. It allows the function to accept an indefinite number of arguments as an array.
 * 
 * 
 * 
 *  function concat(...strings) {
 *    return strings.join(' ');
 *  }
 *  concat('one'); // => 'one'
 *  concat('one', 'two', 'three'); // => 'one two three'
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Spread
 * 
 *  Spread elements
 * 
 *  When ... appears on the right-hand side of an assignment, it's known as the spread operator.
 *  It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.
 * 
 *  const oneToFive = [1, 2, 3, 4, 5];
 *  const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];
 * 
 *  oneToTen; // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

/**
 *  Spread properties
 *  
 *  Similarly to arrays, the spread operator can also be used to copy properties from one object to another.
 * 
 *  let address = {
 *    postalCode: '11011',
 *    city: 'Berlin',
 *  };
 *  address = { ...address, country: 'Germany' };
    // => {
    //   postalCode: '11011',
    //   city: 'Berlin',
    //   country: 'Germany',
    // }
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Get the first card
 *  Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.
 * 
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number} first elemento of the deck
 */
const getFirstCard = (deck) => {
    const [firstCard, ...newDeck] = deck
    return firstCard
}

let deck = [5, 9, 7, 1, 8];
getFirstCard(deck); // => 5

/**
 *  Get the second card
 * 
 *  Elyse performs sleight of hand and summons the second card in the deck without using the array[index].
 * 
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number} second element of the deck
 */
const getSecondCard = (deck) => {
    const [_, secondCard, ...newDeck] = deck
    return secondCard
}

deck = [3, 2, 10, 6, 7];
getSecondCard(deck); // => 2


/**
 *  Swap the first two cards
 * 
 *  Elyse will make the top two cards of the deck switch places.
 *  She doesn't need to call a single function.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number[]}
 */
const swapTopTwoCards = (deck) => {
    return [getSecondCard(deck), getFirstCard(deck), ...deck.splice(2)]
}

deck = [10, 7, 3, 8, 5];
swapTopTwoCards(deck); // => [7, 10, 3, 8, 5]


/**
 *  Discard the top card
 * 
 *  Elyse will separate the deck into two piles.
 *  The first pile will contain only the top card of the original deck,
 *  while the second pile will contain all the other cards.
 */

/**
 * 
 * @param {number[]} deck 
 * @returns {number[]} 
 */
const discardTopCard = (deck) => {
    return [getFirstCard(deck), deck.splice(1)]
}

deck = [2, 5, 4, 9, 3];
discardTopCard(deck); // => [2, [5, 4, 9, 3]]


/**
 *  Insert face cards
 * 
 *  Elyse will insert a set of face cards (i.e. jack, queen, and king) into her deck such that they become the second, third, and fourth cards, respectively.
 */

const insertFaceCards = (deck) => {
    const cards = ['jack', 'queen', 'king'];

    return [getFirstCard(deck), ...cards, ...deck.splice(1)]
}

deck = [5, 4, 7, 10];
insertFaceCards(deck); // => [5, 'jack', 'queen', 'king', 4, 7, 10]



