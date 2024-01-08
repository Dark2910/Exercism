/**
 *  Function Expression
 * 
 *  A function declaration is a standalone statement.
 *  But sometimes it is helpful to define a function as part of another expression, e.g.,
 *  in an assignment, as a function parameter (callback) or as value in an object.
 *  This can be done with a function expression. It has the same syntax as a function declaration,
 *  only that the function name can be omitted to create an anonymous function.
 * 
 *  const someFunction = () => {}
 * 
 *  someOtherFunction(function (param) {}); // =>  someOtherFunction(callback)
 * 
 *  const obj = {
        someFunction : () => {}
 *  }
 */

/**
 *  Scope
 * 
 *  A function introduces a new execution context in JavaScript.
 *  Variables defined inside a function are not accessible outside of that function.
 *  But variables defined in the parent scope (the scope where the function was defined itself) are accessible inside the function.
 *  The MDN documentation on scope shows examples of this behavior.
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Determine whether the lasagna is done
 * 
 *  When you have lasagna in the oven, you want to know whether you can already take it out or not. 
 *  To make sure the lasagna does not burn in the oven, you usually set a timer. But sometimes you forget about that.
 *  
 *  Write a function cookingStatus that accepts the remaining time on the timer in minutes as a parameter. 
 *  The function has three possible results.
 *  
 *  If the timer shows 0, it should return 'Lasagna is done.'.
 *  If the timer shows any other number, the result should be 'Not done, please wait.'.
 *  If the function is called without a timer value, the result should be 'You forgot to set the timer.'.
*/

/**
 * 
 * @param {number} timer 
 * @returns {string} lasagna status
 */
const cookingStatus = (timer) => {
    return (timer === 0) ? 'Lasagna is done.' :
        (timer > 0) ? 'Not done, please wait.' : 'You forgot to set the timer.'
}

cookingStatus()
cookingStatus(12)
cookingStatus(0)

/**
 *  Estimate the preparation time
 *  
 *  For the next lasagna that you will prepare, you want to make sure you have enough time reserved so you can enjoy the cooking.
 *  You already made a plan with all the layers your lasagna will have.
 *  Now you want to estimate how long the preparation will take based on that.
 * 
 *  Implement a function preparationTime that accepts an array of layers and the average preparation time per layer in minutes. 
 *  The function should return the estimate for the total preparation time based on the number of layers. 
 *  If the function is called without providing the average preparation time, 2 minutes should be assumed instead.
 */

/**
 * 
 * @param {string[]} layers 
 * @param {number} timePerLayer 
 * @returns {number} total of time needed
 */
const preparationTime = (layers, timePerLayer = 2) => {
    return layers.length * timePerLayer
}

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

preparationTime(layers, 3)
preparationTime(layers)

/**
 *  Compute the amounts of noodles and sauce needed
 *  
 *  Besides reserving the time, you also want to make sure you have enough sauce and noodles to cook the lasagna of your dreams. 
 *  For each noodle layer in your lasagna, you will need 50 grams of noodles. For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
 *  
 *  Define the function quantities that takes an array of layers as a parameter. 
 *  The function will then determine the quantity of noodles and sauce needed to make your meal. 
 *  The result should be returned as an object with keys noodles and sauce.
 */

/**
 * 
 * @param {string[]} ingredients 
 * @returns {object} quantity of noodles and sauce needed to make your meal
 */
const quantities = (ingredients) => {
    return {
        noodles: ingredients.filter(value => value === 'noodles').length * 50,
        sauce: ingredients.filter(value => value === 'sauce').length * 0.2
    }

    /*     let noodles = 0;
    let sauce = 0;

    for(const value of ingredients){
        
        if(value === 'noodles'){
            noodles += 50;
        }

        if(value === 'sauce'){
            sauce += 0.2;
        }
    } 
    
    return {noodles, sauce}
    */

}

quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']); // => { noodles: 100, sauce: 0.4 }

/**
 *  Add the secret ingredient
 *  
 *  A while ago you visited a friend and ate lasagna there.
 *  It was amazing and had something special to it.
 *  The friend sent you the list of ingredients and told you the last item on the list is the "secret ingredient" that made the meal so special.
 *  Now you want to add that secret ingredient to your recipe as well.
 *  
 *  Write a function addSecretIngredient that accepts two arrays of ingredients as parameters.
 *  The first parameter is the list your friend sent you and the second is the ingredient list for your own recipe.
 *  The function should add the last item from your friend's list to the end of your list.
 *  The array that represents your recipe should be modified directly and the function should not return anything.
 *  However, the first argument should not be modified.
 */

/**
 * 
 * @param {string[]} firendList 
 * @param {string[]} myList 
 */
const addSecretIngredient = (firendList, myList) => {
    myList.push(firendList[firendList.length - 1])
}

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

addSecretIngredient(friendsList, myList); // => undefined
//console.log(myList); // => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

/**
 * Scale the recipe
 * 
 *  The amounts listed in your cookbook only yield enough lasagna for two portions.
 *  Since you want to cook for more people next time, you want to calculate the amounts for different numbers of portions.
 *  
 *  Implement a function scaleRecipe that takes two parameters.
 *  
 *  - A recipe object that holds the amounts needed for 2 portions. The format of the object can be seen in the example below.
 *  - The number of portions you want to cook.
 * 
 *  The function should return a recipe object with the amounts needed for the desired number of portions.
 *  You want to keep the original recipe though. This means, in this task the recipe argument should not be modified.
 */

/**
 * 
 * @param {object} recipe 
 * @param {number} portions 
 * @returns {object} 
 */
const scaleRecipe = (recipe, portions) => {
    const newRecipe = {};

    for (const key in recipe) {
        newRecipe[key] = recipe[key] * (portions / 2);
    }

    return newRecipe;
}

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};

scaleRecipe(recipe, 4); // => {noodles: 400, sauce: 1, mozzarella: 2, meat: 200};
//console.log(recipe); // => { noodles: 200, sauce: 0.5, mozzarella: 1, meat: 100};