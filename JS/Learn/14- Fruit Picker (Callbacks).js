/**
 *  Callbacks
 * 
 *  Callback functions are functions passed as arguments.
 *  This programming pattern creates a sequence of function calls in both synchronous and asynchronous programming.
 *  Writing a callback function is no different from writing a function; however, the callback function must match the signature defined by the calling function.
 * 
 * 
 *  const sideLength = 5;
    // Caller function takes a callback function
 *  function applySideLength(callback) {
 *      return callback(sideLength);
 *  }
    // Callback must expect the possible argument from the calling function
 *  function areaOfSquare(side) {
 *      return side * side;
 *  }
 *  applySideLength(areaOfSquare); // => 25
 * 
 *  You may also write callbacks as a function expression:
 * 
 *  applySideLength(function squarePerimeterLength(side) {
 *      return side * 4;
 *  });
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Create a callback to be called when the order is successful
 * 
 *  Write a callback function called onSuccess to be called when the order is successful.
 *  It should invoke the imported notify function passing a success message to it.
 */

/**
 * @return void
 */
const onSuccess = () => {
    return notify({message: 'SUCCESS'})
}

onSuccess(); // => `notify` called with `{ message: 'SUCCESS' }`


/**
 *  Create a callback to be called when the order fails with an error
 *  
 *  Write a callback function called onError to be called when the order encounters an error.
 *  It should invoke the imported notify function passing an error message to it.
 */

/**
 * 
 * @returns void
 */
const onError = () => {
    return notify({message: 'ERROR'})
}

onError(); // => `notify` called with `{ message: 'ERROR' }`


/**
 * Create a wrapper to wrap the external api function
 * 
 * The grocer's API provides a function to order from their inventory called order.
 *  It receives three arguments: a query, a callback function to be invoked when the order is successful,
 *  and a callback function to be invoked when the order encounters an error.
 *  You decide to wrap the api function call in a newly defined function orderFromGrocer to insulate your codebase from external changes.
 *  Your function should forward the arguments (which match the provided api function) to the api function.
 * 
 * The query takes the form of an object:
 */

/**
 * 
 * @param {GroceryQuery} query 
 * @param {FruitPickerSuccessCallback} successCallback 
 * @param {FruitPickerErrorCallback} errorCallBack 
 * @returns void
 */
const orderFromGrocer = (query, onSuccess, onError) => {
    return order(query, onSuccess, onError)
}

const query = {
    variety: string,
    quantity: number,
};


orderFromGrocer({ variety: 'pear', quantity: 12 }, successCallback, errorCallback); // => `order` was called with the query and the callbacks

/**
 *  Create a convenient short function
 * 
 *  You find that you are calling this function from many different places with the same functions.
 *  Seeing an opportunity to refactor your code, you want to create a function where you can supply the variety and quantity to order as arguments.
 */

const postOrder = (variety, quantity) => {
    return order({variety: variety, quantity:quantity}, onSuccess, onError)
}

postOrder('peach', 100); // => order submitted for 100 peaches