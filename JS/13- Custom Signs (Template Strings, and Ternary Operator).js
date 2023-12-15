/**
 *  Template Strings
 * 
 *  In JavaScript, template strings allows for embedding expressions in strings, also referred to as string
 *  interpolation. This functionality extends the functionality of the built-in String global object.
 * 
 *  You can create template strings in JavaScript by wrapping text in backticks.
 *  They not only allow the text to include new lines and other special characters,
 *  but you can also embed variables and other expressions.
 * 
 *  const num1 = 1;
 *  const num2 = 2;
 *  `Adding ${num1} and ${num2} gives ${num1 + num2}.`; // => Adding 1 and 2 gives 3.
 */

/**
 *  Ternary Operator
 * 
 *  The conditional ternary operator is used to write a condensed expression that returns one of two alternate
 *  values based on some condition. It is often referred to as the "ternary operator".
 *  The name stems from the fact that the operator has three operands: 
 *  
 *  predicate ? consequent-expression : alternative-expression 
 * 
 *  It can be used as a replacement for short if-else statements.
 * 
 *  Similar to if statements, JavaScript will perform implicit type conversion to evaluate the condition.
 *  If the condition is truthy, the operand on the left-hand side of the colon will be returned.
 *  Otherwise the result of the ternary expression is the operand on the right-hand side of the colon.
 * 
 *  const year = 2020;
 *  year > 2000 ? 'in the past years' : 'a long time ago'; // => 'in the past years'
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Build an occasion sign
 * 
 *  Implement the function buildSign(occasion, name) that accepts a string as the occasion parameter and
 *  a string holding someone's name as the name parameter. The two parameters will be embedded into 
 *  a template string to output the message on the sign.
 */

/**
 * Build a sign that includes both of the parameters.
 * 
 * @param {string} occasion 
 * @param {string} name 
 * @returns {string} template string combining both parameters  
 */
const buildSign = (occasion, name) => {
    return `Happy ${occasion} ${name}!`;
}

buildSign('Birthday', 'Rob'); // => "Happy Birthday Rob!"

/**
 *  Build a birthday sign
 * 
 *  Implement the function buildBirthdaySign(age) that accepts an age and based on the age will determine 
 *  part of the message on the sign. If the age is 50 or older, the sign will refer user as mature,
 *  else it will refer them as young. The exact expected output is shown below:
 */

/**
 * Build a birthday sign that conditionally formats the return string.
 * 
 * @param {number} age 
 * @returns {string} template string based on age
 */
const buildBirthdaySign = (age) => {
    return `Happy Birthday! What a ${ (age < 50) ? 'young' : 'mature' } fellow you are.`;
}

buildBirthdaySign(50); // => "Happy Birthday! What a mature fellow you are."
buildBirthdaySign(45); // => "Happy Birthday! What a young fellow you are."

/**
 *  Build a graduation sign
 *  
 *  Implement the function graduationFor(name, year) which takes a name as a string parameter and 
 *  a year as a number parameter and uses string interpolation to create a phrase for a sign that uses
 *  a newline to separate the two lines of the message.
 */

/**
 * Build a graduation sign that includes multiple lines.
 * 
 * @param {string} name 
 * @param {number} year 
 * @returns multi-line template string
 */
const graduationFor = (name, year) => {
    return `Congratulations ${name}!
Class of ${year}`;
}

graduationFor('Hannah', 2022); // => "Congratulations Hannah!\nClass of 2022"

/**
 *  Compute the cost of a sign
 * 
 *  Implement the function costOf(sign, currency) which takes a string that holds the contents of the sign and
 *  a string that represents the currency. The sign has a base price of 20 in the given currency.
 *  Additionally each letter costs 2. (Whitespaces are included in the calculation.)
 *  The phrase returned includes the cost to create the sign, written with two digits after the decimal point,
 *  followed by the currency string.
 */

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 * 
 * @param {*} sing 
 * @param {*} current 
 * @returns {string} cost to create the sign
 */
const costOf = (sign, currency  = 'dollar') => {
    return `Your sign costs ${(sign.length * 2 + 20).toFixed(2)} ${currency}.`;
}

costOf('Happy Birthday Rob!', 'dollars'); // => "Your sign costs 58.00 dollars."
