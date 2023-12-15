/**
 *  About Booleans
 *  
 *  JavaScript uses true and false to represent the two truth values of logic.
 *  In JavaScript, for each of the three logical operations (AND, OR and NOT) there is a corresponding operator: &&, || and !. 
 *  In general, there are rules regarding the order of the operations and, in this case, ! (negation) is applied first, and then && (conjunction) and then || (disjunction).
 *  The order of operations between the operators can be overcome by using an operator with higher precedence: ( ), named the 'Grouping operator' or simply said 'parentheses'. 
 *  As a matter of fact, the ( ) operator has the highest precedence of all JavaScript operators.
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Check if the 'Fast Attack' action is possible
 *  
 *  Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake.
 *  This function returns true if the 'Fast Attack' action is available based on the state of the character.
 *  Otherwise, returns false:
 */

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
const canExecuteFastAttack = (knightIsAwake) => {
    return !knightIsAwake;
}

let knightIsAwake = true;
canExecuteFastAttack(knightIsAwake); // => false

/**
 *  Check if the 'Spy' action is possible
 *  
 *  Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, 
 *  respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters.
 *  Otherwise, returns false:
 */

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
    return(knightIsAwake || archerIsAwake || prisonerIsAwake);
}

knightIsAwake = false;
let archerIsAwake = true;
let prisonerIsAwake = false;
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake); // => true}


/**
 *  Check if the 'Signal Prisoner' action is possible
 *  
 *  Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, 
 *  respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:
 */

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    return(!archerIsAwake && prisonerIsAwake);
}

archerIsAwake = false;
prisonerIsAwake = true;
canSignalPrisoner(archerIsAwake, prisonerIsAwake); // => true

/**
 * Check if the 'Free Prisoner' action is possible
 * 
 * Implement a function named canFreePrisoner that takes four boolean values.
 * The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake.
 * The last parameter indicates if Annalyn's pet dog is present.
 * The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. 
 * Otherwise, it returns false:
 */

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
    return(petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !archerIsAwake && !knightIsAwake);
}

knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
petDogIsPresent = false;
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent); // => false