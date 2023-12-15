/**
 *  Type Conversion
 *  
 *  JavaScript does not have a construct to cast into a (different) type like many other languages but some built-in helpers can be used instead.
 *  Most notably, the global objects Boolean, Number and String can be used as functions to convert a value to the respective type.
*/

/**
 *  Converting to a Boolean (Truthy/Falsy Values)
 * 
 *  With Boolean(value) you can convert any value to a boolean.
 * 
 *  Boolean(-1);    // => true 
 *  Boolean(0);     // => false 
 *  Boolean(' ');   // => true 
 *  Boolean('');    // => false
 */

/**
 *  Converting to a Number
 *  
 *  Number(value) can be used to convert a value to a number.
 *  Whitespaces at the beginning and the end of a string are ignored and an empty string is converted to 0.
 *  If you try to convert a non-primitive value or a string that does not represent a number,
 *  no error will be thrown. Instead, the result is NaN (Not-A-Number).
 * 
 *  Number('  -12.34  ');    // => -12.34 
 *  Number('1,2');           // => NaN 
 *  Number('1 2');           // => NaN 
 *  Number('');              // => 0 
 *  Number('10e3');          // => 10000 
 *  Number({ key: '123' });  // => NaN
 * 
 *  Below you can see what Number returns for other primitive values.
 * 
 *  Number(true);        // => 1 
 *  Number(false);       // => 0 
 *  Number(null);        // => 0 
 *  Number(undefined);   // => NaN
 * 
 *  Note that in contrast to the last example, Number() called without any argument is defined to return 0.
 * 
 *  JavaScript also provides the functions parseInt and parseFloat.
 *  They apply laxer rules as to which strings can be converted to a number.
 *  Because of that, Number should be preferred as the conversion function to avoid unexpected outcomes.
 * 
 *  parseInt('123a45'); // => 123
 *  Number('123a45'); // => NaN       
 */

/**
 *  Converting to a String
 * 
 *  With String(value) you can convert a value to a string.
 *  The result is what you would expect it to be for primitive values.
 * 
 *  String(12.34);      // => '12.34'
 *  String(false);      // => 'false'
 *  String(null);       // => 'null'
 *  String(undefined);  // => 'undefined'
 * 
 *  For arrays, the String function will apply the string conversion for each element and join the results with a comma.
 *  You can also apply the join method yourself, e.g. to customize the separator. However, in these cases null and undefined will be converted to an empty string.
 * 
 *  String([42, null, true, 'abc']); // => '42,,true,abc'
 * 
 *  For objects, by default String returns an unhelpful text.
 * 
 *  String({ key: 'value' }); // => '[object Object]'
 * 
 *  You can customize the conversion behavior, e.g. by providing a toString method.
 *  Another common way to achieve a better string representation for objects and arrays is to use JSON encoding.
 *  You can convert into a string with JSON.stringify and back into an object or array with JSON.parse.
 * 
 *  const obj = {
 *      name: 'Gilda Guerra',
 *      address: {
 *          city: 'Goiânia',
 *      },
 *  };
 *  
 *  JSON.stringify(obj); // => '{"name":"Gilda Guerra","address":{"city":"Goiânia"}}'
 */

/**
 *  Type Coercion
 * 
 *  In certain contexts, JavaScript will automatically convert a value to another data type before it 
 *  evaluates some statement. This implicit conversion is called type coercion.
 */

/**
 *  Boolean Context
 * 
 *  When a value is used in a boolean context, JavaScript will apply the same rules as the Boolean function to implicitly convert the value.
 *  
 *  - When the condition of an if statement is not a boolean, coercion is applied to determine whether the condition is fulfilled or not.
 *      The same applies for the first operand of the ternary operator ?.
 * 
 *  const num = 0;
 *  if (num) {}
 * 
 *  const name = 'Jin';
 *  name ? 'name was provided' : 'no name provided'; // => 'name was provided'
 * 
 *  - The operand of the logical NOT operator ! is also coerced into boolean before the NOT operation is applied.
 * 
 * const name = '';
 * !name; // => true
 * 
 *  - JavaScript also applies coercion for the operands of the logical AND (&&) and OR (||) operators.
 *       But keep in mind that the result of the expression is not necessarily a boolean.
 * 
 *  null || 'hello'; // => 'hello'
 */

/**
 *  String Context
 * 
 *  If the addition operator + is used for primitive values and one operand is a string, the other one will be coerced into a string as well.
 *  The conversion logic is the same as when using the String function. Afterwards, the two strings are concatenated.
 * 
 *  let name;
 *  'hello ' + name; // => 'hello undefined'
 * 
 *  The same implicit conversion happens for non-string values that are embedded in template strings.
 *  const degrees = 23;
 *  `It is ${degrees} °C`; // => 'Is is 23 °C.';
 */

/**
 *  Numeric Context
 *  
 *  Many operators coerce the operands into numbers (if necessary) according to the logic of the Number function explained above.
 * 
 *  - Arithmetic operators: + (if no string is involved), -, *, /, %, **
 *  - Unary plus and unary negation operators: +, -
 *  - Relational operators (for non-string operands): >, >=, <, <=
 *  - Bitwise operators: |, &, ^, ~
 * 
 *  When an operand could potentially be a string, it is best to always explicitly convert with the Number function to avoid mistakes.
 * 
 *  '1' + '2';   // => '12'
 *  Number('1') + Number('2'); // => 3
 * 
 *  Sometimes you will see the unary plus operator being used to coerce a string into a number.
 *  This is not recommended because it is much harder to read than the explicit Number call.
 * 
 *  const value = '42';
 *  +value; // => 42
 *  
 *  Number(value); // => 42
 * 
 *  Using the loose equality and inequality operators ==/!= also often involves an implicit conversion to a number.
 *  However, the exact logic of these operators is rather complicated.
 *  The results are hard to predict and sometimes not what you would expect.
 *  Use the strict equality/inequality operators ===/!== instead to avoid these implicit conversions.
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Calculate the sum for the numbers on the slot machine
 * 
 *  One of the games on Kojos' website looks like a slot machine that shows two groups of wheels with digits on them.
 *  Each group of digits represents a number. For the game mechanics, Kojo needs to know the sum of those two numbers.
 *  
 *  Write a function twoSum that accepts two arrays as parameters. Each array consists of one or more numbers between 0 and 9.
 *  The function should interpret each array as a number and return the sum of those two numbers.
 */

/**
 * Calculates the sum of the numbers represented by the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
const twoSum = (array1, array2) => {
    const firstNumber = array1.join('');
    const secondNumber = array2.join('');

    return Number(firstNumber) + Number(secondNumber);
    //const firstNumber = arrayUnion(array1);
    //const secondNumber = arrayUnion(array2);

    //return firstNumber + secondNumber;
}

twoSum([1, 2, 3], [0, 7]); //=> 130

////////////////////////////////////////////

/**
 * Calculate the sum of the array content 
 * 
 * @param {number[]} numbers 
 * @returns {number} sum of the array
 */
const arraySum = (numbers) => {
    const sum = numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    },0)

    return sum
}
/**
 * Concatenate the content of the array
 * 
 * @param {number[]} numbers 
 * @returns {number} union from the content of the array
 */
const arrayUnion = (numbers) => {
    const union = numbers.map(value => String(value)).join('')
    return Number(union)
}

////////////////////////////////////////////

/**
 *  Determine if a number is a palindrome
 *  
 *  Another game on the website is a little quiz called "Lucky Numbers".
 *  A user can enter a number and then sees whether the number belongs to some secret sequence or pattern.
 *  The sequence or pattern of the "lucky numbers" changes each month and each user only has a limited number of tries to guess it.
 *  
 *  This months' lucky numbers should be numbers that are palindromes.
 *  Palindromic numbers remain the same when the digits are reversed.
 *  
 *  Implement the new luckyNumber function that accepts a number as a parameter.
 *  The function should return true if the number is a palindrome and false otherwise.
 *  The input number will always be a positive integer.
 */

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
const luckyNumber = (value) => {
    const strValue = String(value);

    return strValue === [...strValue].reverse().join('')
    //return strValue === strValue.split('').reverse().join('')
    //return value === reverseNumber(value)
}

luckyNumber(1441); //=>  true
luckyNumber(123); //=> false

////////////////////////////////////////////

/**
 * Calculate value length
 * 
 * @param {number} value 
 * @returns {number} length of the value
 */
const sizeNumber = (value) => {
    let valuesize = value;
    let contador = 0;

    while(valuesize > 0 ){
        valuesize = Math.floor(valuesize / 10);
        contador++;
    }

    return contador;
}
/**
 * This function inverse a value
 * 
 * @param {number} value 
 * @returns {number} invested value
 */
const reverseNumber = (value) => {
    let decimal = value;
    let remainder = 0;
    let valueReversed = 0;
    let count = sizeNumber(value);

    while( count > 0){
        count--
        remainder = decimal % 10;
        decimal = Math.floor(decimal/10);
        valueReversed = valueReversed + remainder * Math.pow(10,count);
    }

    return valueReversed;
} 

////////////////////////////////////////////

/**
 *  Generate an error message for invalid user input
 * 
 *  In various places on the website, there are input fields where the users can enter numbers and click a button to trigger some action.
 *  Kojo wants to improve the user experience of his site.
 *  He wants to show an error message in case the user clicks the button but the field contains an invalid input value.
 * 
 *  Here is some more information on how the value of an input field is provided.
 * 
 *  - If the user types something into a field, the associated value is always a string even if the user only typed in numbers.
 *  - If the user types something but deletes it again, the variable will be an empty string.
 *  - Before the user even started typing, the variable can be undefined or null.
 * 
 *  Write a function errorMessage that accepts the user input as a parameter.
 *  If the user did not provide any input, errorMessage should return 'Required field'.
 *  If the input does not represent a non-zero number (according to the JavaScript conversion rules),
 *  'Must be a number besides 0' should be returned. In all other cases, you can assume the input is valid,
 *  the return value should be an empty string.
 */

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export const errorMessage = (input) => {
    if (!input) {
        return 'Required field';
    }
    
    return (Number(input)) ? '' : 'Must be a number besides 0'
}

errorMessage('123'); // => ''
errorMessage(''); // => 'Required field'
errorMessage('abc'); // => 'Must be a number besides 0'