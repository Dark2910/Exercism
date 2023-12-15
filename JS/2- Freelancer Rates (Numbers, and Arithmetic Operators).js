/**
 *  Special Notations
 * 
 *  The E-notation indicates a number that should be multiplied by 10 raised to a given power. 
 *  The format of E-notation is to have a number, followed by e or E, than by the power of 10 to multiply by.
 * 
 *  const num = 3.125e7; // => 31250000
 *  const num = 325987e-6; // => 0. 325987
 */

/**
 *  Underscore Notation
 * 
 *  Underscores can be used to make large numbers easier to read for the user. 
 *  The compiler will completely ignore the underscores.
 * 
 *  const num = 1_000_000; // => 1000000
 */

/**
 *  Built-in Object
 * 
 *  There are two built-in objects that are useful when dealing with numbers:
 *  - Number: static properties for common / useful values, static methods for type-checking and type-conversion, 
 *              instance methods for type-conversion and formatting numbers as strings.
 *  - Math: properties and methods for mathematical constants and functions, does not work with BigInt. 
 *              Math also includes methods for rounding numbers.
 * 
 * 
 *  The Number built-in global object is also a global function that can be used to convert almost anything number-like to a number. 
 *  It is less forgiving than parsing a string to a number.
 * 
 *  const date = new Date('December 17, 1995 03:24:00');
 *  const unix = Number(date); // => 819192240000 milisegundos transcurridos desde el 1 de enero de 1970, a las 00:00:00 UTC (conocido como el Epoch).
 * 
 * 
 *   There are three types of maximum and minimum values for numbers in JavaScript
 * 
 *  - VALUE: given by Number.MAX_VALUE and Number.MIN_VALUE
 *  - INFINITY: given by Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY
 *  - SAFE_INTEGER: given by Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
 * 
 *  Because of how numbers in JavaScript are implemented, not every number between Number.MIN_VALUE and Number.MAX_VALUE can be 
 * represented. However, every number between Number.MIN_SAFE_INTEGER - 1 and Number.MAX_SAFE_INTEGER + 1 can be represented.
 */

/**
 *  Infinity
 * 
 *  Infinity is an error value indicating one of two problems:
 * 
 *  - A number can't be represented because its magnitude is too large.
 *      Math.pow(2, 1024); // => Infinity
 * 
 *  - A division by zero has happened.
 *      6 / 0; // => Infinity
 *      -6 / 0; // => -Infinity
 * 
 *  The global function isFinite() allows you to check whether a value is an actual number (neither infinite nor NaN):
 * 
 *  isFinite(80085); // => true
 *  isFinite(Infinity); // => false
 *  isFinite(NaN); // => false
 */


/**
 *  The Two Zeros
 * 
 *  +0 or -0 are distinct numbers in JavaScript. 
 *  They can be produced if you represented a number, that is so small that it is indistinguishable from 0. 
 *  The signed zero allows you to record “from which direction” you approached zero; that is, what sign the number had before it was considered zero. 
 *  It is best practise to pretend there's only one zero.
 */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Calculate the day rate given an hourly rate
 *  A client contacts the freelancer to enquire about their rates. 
 *  The freelancer explains that they work 8 hours a day. However, the freelancer knows only their hourly rates for the project.
 *  Help them estimate a day rate given an hourly rate.
 * 
 */

/**
 * The day rate, given a rate per hour
 * 
 * @param {number} ratePerHour 
 * @returns {number} the rate per day
 */
const dayRate = (ratePerHour) => {
    const hoursDay = 8;
    return ratePerHour * hoursDay
}

dayRate(89);

/**
 *  Calculate the number of workdays given a fixed budget
 *  Another day, a project manager offers the freelancer to work on a project with a fixed budget.
 *  Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted.
 *  The result must be rounded down to the nearest whole number.
 * 
 */

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
const daysInBudget = (budget, ratePerHour) => {
    return Math.floor(budget / dayRate(ratePerHour))
}

daysInBudget(20000, 89);

/**
 *  Calculate the discounted rate for large projects
 *  Often, the freelancer's clients hire them for projects spanning over multiple months.
 *  In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate.
 *  Every month has 22 billable days.
 *  Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate.
 *  The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.
 * 
 */

/**
 * 
 * @param {number} percentage 
 * @param {number} amount 
 * @returns 
 */
const discountRate = (percentage,amount) => {
    return amount - (amount * percentage);
}
/**
 * 
 * @param {number} months 
 * @returns {number}
 */
const daysPerMonth = (months) => {
    return months * billableDays;
}
/**
 * 
 * @param {number} days 
 * @returns {number}
 */
const MonthsPerDays = (days) => {
    return Math.floor(days / billableDays);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const billableDays = 22;
    let months =  MonthsPerDays(numDays);
    let remainingDays  = numDays % billableDays;
    let ratePerMonths = dayRate(ratePerHour) * daysPerMonth(months);
    let discountRatePerMonths =  discountRate(discount,ratePerMonths);
    let ratePerRemainingDays = dayRate(ratePerHour) * remainingDays;
    return Math.ceil(discountRatePerMonths + ratePerRemainingDays);
}

priceWithMonthlyDiscount(89, 230, 0.42);