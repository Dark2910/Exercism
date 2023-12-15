/**
 *  Closures
 * 
 *  Closures are a programming pattern in JavaScript that allows variables from an outer lexical scope to be 
 *  used inside of a nested block of code. JavaScript supports closures transparently, and they are often used 
 *  without knowing what they are.
 * 
    // Top-level declarations are global-scope
 *  const dozen = 12; 
 * 
 *  {
        // Braces create a new block-scope referencing the outer variable is a closure.
 *      const twoDozen = dozen * 2; 
 *  }
 * 
    // Functions create a new function-scope and block-scope referencing the outer variable here is a closure.
 *  function nDozen(n) {
 *      return dozen * n;
 *  }
 */

/**
 *  Closures to save state and pass along values
 * 
 *  Using a mutable variable declaration (like let or var) allows for state to be preserved:
 * 
 *  let counter = 0;
 * 
    // This function closure increments the counter's state in the outer lexical context.
    // This way the counter can be shared between many calling contexts.
 *  export function increment() {
 *      counter += 1;
 *      return counter;
 *  }
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Translate the coordinates
 *  
 *  Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.
 */

/**
 * 
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
const translate2d = (dx, dy) => {
    return (x, y) => {
        return[x + dx , y + dy]
    }
}

let moveCoordinatesRight2Px = translate2d(2, 0);
let result1 = moveCoordinatesRight2Px(4, 8); // result => [6, 8]

/**
 *  Scale the coordinates
 *  
 *  Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.
 * 
 *  For this exercise, assume only positive scaling values.
 */

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component   
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
const scale2d = (sx, sy) => {
    return (x, y) => {
        return[ x * sx, y *sy]
    }
}

const doubleScale = scale2d(2, 2);
let result2 = doubleScale(6, -3); // result => [12, -6]

/**
 *  Compose transformation functions
 * 
 *  Combine two transformation functions to perform a repeatable transformation.
 *  This is often called function composition, where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.
 */

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
const composeTransform = (f, g) => {
    return (x, y) => {
        return g(...f(x, y));
    }
}

moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(moveCoordinatesRight2Px, doubleCoordinates);
const result = composedTransformations(0, 1); // result => [4, 2]


/**
 *  Save the results of functions
 * 
 *  Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that 
 *  remembers the inputs to the supplied function so that the last return value can be "remembered" and only 
 *  calculated once if it is called again with the same arguments.
 * 
 *  Memoizing is sometimes used in dynamic programming.
 *  It allows for expensive operations to be done only once since their results are remembered.
 *  Note that in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize all results.
 */

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
const memoizeTransform = (f) => {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return `Already exists: ${cache.get(key)}`
        }
        else{
            let result = f(...args);
            cache.clear()
            cache.set(key, result)
            
            return `New value: ${result}`
        }
    }
}

const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

memoizedScale(4, 3); // => [12, 9], this is computed since it hasn't been computed before for the arguments
memoizedScale(4, 3); // => [12, 9], this is remembered, since it was computed already
//console.log(memoizedScale(3, 4));