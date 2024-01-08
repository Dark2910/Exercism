/**
 *  Instructions
 * 
 *  You run a pizza shop, and offer three types of pizzas:
 *  
 *  - Margherita: $7
 *  - Caprese: $9
 *  - Formaggio: $10
 *  - If customers want, they can add an unlimited number of extra options: either "ExtraSauce" for $1 or "ExtraToppings" for $2.
 *  
 *  Your task is to write code that assists the customer in figuring out the cost to them.
 */

/**
 *  Calculate the price of a pizza
 *  
 *  Provided the pizza's name as the first argument, and an unlimited number of added options,
 *  calculate the price of the pizza in dollars.
 */

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const pizzaPrice = function(pizza = 'default', ...extras) {
    const pizzasPrices = {
        default: 0,
        Margherita: 7,
        Caprese: 9,
        Formaggio: 10,
    }
    const extrasPrices = {
        ExtraSauce: 1,
        ExtraToppings: 2,
    }
    const calculateExtrasPrices = (extrasList) => {
        if(extrasList.length === 0) {
            return 0;
        }else{
            const [firstExtra, ...remainingExtras] = extrasList;
            return extrasPrices[firstExtra] + calculateExtrasPrices(remainingExtras);
        }
    }
    const extasAmount = calculateExtrasPrices(extras)
    return pizzasPrices[pizza] + extasAmount;
    //const extasAmount = extras.map(value => extrasPrices[value]).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

pizzaPrice('Margherita');
// => 7

pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings');
// => 12

pizzaPrice(
    'Caprese',
    'ExtraToppings',
    'ExtraToppings',
    'ExtraToppings',
    'ExtraToppings',
);
// => 17

/**
 *  Calculate the total price of an order
 * 
 *  Your function is called with a list of PizzaOrders and should return the total price of
 *  the order in dollars. Each PizzaOrder has a pizza property - the pizza's name,
 *  and an extras property - the list of extra options.
 */

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
const orderPrice = (pizzas) => {
    if(!pizzas || pizzas.length === 0){
        return 0;
    }

    const pizzasCopy = Array.from(pizzas);
    let total = 0;

    for(let i = 0; i < pizzas.length; i++){
        const order = pizzasCopy.pop();
        const [pizza, extras] = Object.values(order)
        total += pizzaPrice(pizza, ...extras);
    }

    return total
}
class PizzaOrder {
    constructor(pizza, ...extras){
        this.pizza = pizza;
        this.extras = extras
    }
}

const margherita = new PizzaOrder('Margherita'); // 7
const margherita2 = new PizzaOrder('Margherita', 'ExtraSauce'); // 8
const caprese = new PizzaOrder('Caprese'); // 9
const caprese2 = new PizzaOrder('Caprese', 'ExtraToppings'); // 11
const formaggio = new PizzaOrder('Formaggio'); // 10
const formaggio2 = new PizzaOrder('Formaggio', 'ExtraSauce'); // 11
const formaggio3 = new PizzaOrder('Formaggio','ExtraSauce','ExtraToppings',); // 13
const formaggio4 = new PizzaOrder('Formaggio','ExtraToppings','ExtraSauce','ExtraToppings','ExtraSauce',); // 16

console.log(orderPrice([margherita, margherita2, caprese, caprese2, formaggio, formaggio2, formaggio3, formaggio4,])); 
// => 85

/* 
const orderPrice = (pizzas) => {
    if(pizzas.length === 0){
        return 0;
    }else{
        const pizzasCopy = Array.from(pizzas)
        const order = pizzasCopy.pop();
        const [pizza, extras] = Object.values(order);
        const currentPizzaPrice = pizzaPrice(pizza, ...extras);
        const remainingPizzaPrice = orderPrice(pizzasCopy);
        return currentPizzaPrice + remainingPizzaPrice;
    }
}
 */
