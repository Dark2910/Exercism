/**
 *  Nested If-Statements
 *  
 *  if (condition1) {
 * 
 *  } else if (condition2) {
 * 
 *  } else {
 * 
 * }
 */

/**
 *  Short-Hand Notations
 * 
 *  If you only want to execute one statement in the code block for if or else, it is possible in JavaScript to omit the curly brackets.
 * 
 *  if (condition) doSomething(); 
 * 
 *  or
 *  
 *  if (condition)
 *      doSomething();
 */

/**
 *  Comparison
 * 
 *  In JavaScript, numbers can be compared using the following relational and equality operators.
 * 
 *  - Greater than	            a > b
 *  - Greater than or equals	a >= b
 *  - Less than	                a < b
 *  - Less than or equals	    a <= b
 *  - (Strict) Equals	        a === b
 *  - Not (strict) equals	    a !== b
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Determine if you will need a drivers licence
 *  
 *  Some kinds of vehicles require a drivers license to operate them. 
 *  Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.
 *  
 *  Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.
 */

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
const needsLicense = (kind) => {
    return(kind === 'car' || kind === 'truck');
}

needsLicense('car'); // => true
needsLicense('bike'); // => false

/**
 *  Choose between two potential vehicles to buy
 *  
 *  You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the 
 *  final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and 
 *  returns a decision that includes the option that comes first in dictionary order.
 */

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
const chooseVehicle = (option1, option2) => {
    if (option1 < option2) {
        return option1 + ' is clearly the better choice.'
    }
    return option2 + ' is clearly the better choice.'
}

chooseVehicle('Wuling Hongguang', 'Toyota Corolla'); // =>  'Toyota Corolla is clearly the better choice.'
chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'); // =>  'Volkswagen Beetle is clearly the better choice.'

/**
 *  Calculate an estimation for the price of a used vehicle
 * 
 *  Now that you made your decision you want to make sure you get a fair price at the dealership. 
 *  Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. 
 *  For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it 
 *  was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 
 *  10 years, it costs 70% of the original price.
 * 
 *  Implement the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and 
 *  else (there are other ways if you want to practice). It takes the original price and the age of the vehicle as arguments and
 *  returns the estimated price in the dealership.
 */

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    switch (true) {
        case (age < 3):
            return 0.8 * originalPrice;
        case (age > 10):
            return 0.5 * originalPrice;
        case (age >= 3 && age <= 10):
            return 0.7 * originalPrice;
        default:
            return originalPrice;
    }
}

calculateResellPrice(1000, 1); // => 800
calculateResellPrice(1000, 5); // => 700
calculateResellPrice(1000, 15); // => 500