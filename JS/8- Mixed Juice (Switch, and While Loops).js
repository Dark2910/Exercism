/**
 *  While loops
 * 
 *  With a while loop, you can execute code repeatably as long as a certain condition is fulfilled.
 *  
 *  It is written with the while keyword followed by a condition wrapped in round brackets and a code block that contains the body of the loop wrapped in curly brackets.
 * 
 *  while (condition) {
 * 
 *  }
 * 
 *  JavaScript also has a do-while loop. Here the condition is checked after the loop body was executed. 
 *  This is useful when the condition depends on evaluations done in the body.
 * 
 *  do {
 * 
 *  } while (condition);
 */

/**
 *  Break
 * 
 *  Inside a loop body, you can use the break keyword to stop the execution of the loop entirely. 
 *  This is often used in combination with true as the condition. 
 *  With that, you can control when the loop should stop from any place inside the loop body.
 * 
 * const winningNumber = 7;
 *  while (true) {
 *      const num = readUserGuess();
 *      if (num === winningNumber) {
 *          break;
 *      }
    }
 */

/**
 *  Continue
 *  In contrast to break, the keyword continue only stops the execution of the current iteration and continues with 
 *  the next one. With continue you can often avoid wrapping big parts of the loop body in an if-statement.
 * 
 * 
 *  let i = 0;
 *  while (i < 100) {
 *      i = i + 2;
 *      if (i % 3 === 0) {
 *          continue;
 *      }
 *  The code here will only be executed when i was not divisible
 *  by 3 in the check above.
 *  }
 */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Determine how long it takes to mix a juice
 *  Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they 
 *  ordered. She has a hard time remembering the exact numbers because the time it takes to mix the juices varies. 
 *  'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 
 *  'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers)
 *  you can assume a preparation time of 2.5 minutes.
 * 
 *  To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the
 *  number of minutes it takes to mix that drink.
 */

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = (name) => {
    switch (name) {
        case ('Pure Strawberry Joy'):
            return 0.5;
        case ('Energizer'):
        case ('Green Garden'):
            return 1.5;
        case ('Tropical Island'):
            return 3;
        case ('All or Nothing'):
            return 5;
        default:
            return 2.5;
    }
}

timeToMixJuice('Tropical Island'); // => 3
timeToMixJuice('Berries & Lime'); // => 2.5

/**
 *  Replenish the lime wedge supply
 *  A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration.
 *  So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.
 * 
 *  Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing 
 *  the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. 
 *  She always cuts the limes in the order in which they appear in the list, starting with the first item. 
 *  She keeps going until she reached the number of wedges that she needs or until she runs out of limes.
 * 
 *  Li Mei would like to know in advance how many limes she needs to cut.
 *  The limesToCut function should return the number of limes to cut.
 */

/**
 * Calculate the number of wedges from a lime
 *
 * @param {string} lime 
 * @returns {numbre} number of wedges
 */
const wedgesFromLime = (lime) => {
	const wedges = {
		small: 6,
		medium: 8,
		large: 10
		
	}
    
	return wedges[lime];
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded 
 * @param {string[]} limes 
 * @returns {number} numbre of limes to cut
 */

export const limesToCut = (wedgesNeeded, limes) => {
    let limesCut = 0;
    while (wedgesNeeded > 0 && limes.length > 0) {
        wedgesNeeded -= wedgesFromLime(limes.shift());
        limesCut++;
    }

    return limesCut;
}

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']); // => 4

/**
 *  Finish up the shift
 *  Li Mei always works until 3pm. Then her employee Dmitry takes over.
 *  There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends.
 *  Dmitry will then prepare the remaining juices.
 * 
 *  To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in 
 *  Li Mei's shift and an array of juices that have been ordered but not prepared yet. 
 *  The function should return the orders that Li Mei cannot start preparing before the end of her workday.
 * 
 *  The time left in the shift will always be greater than 0. 
 *  The array of juices to prepare will never be empty. Furthermore, the orders are prepared in the order in which they appear in the array.
 *  If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer.
 *  If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.
 */

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft 
 * @param {string[]} orders 
 * @returns {string[]} remaining orders after the time is up
 */
export const remainingOrders = (timeLeft, orders) => {
    do {
        timeLeft -= timeToMixJuice(orders.shift());
    } while (timeLeft > 0 && orders.length > 0);

    return orders;
}

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']); // => ['Green Garden']