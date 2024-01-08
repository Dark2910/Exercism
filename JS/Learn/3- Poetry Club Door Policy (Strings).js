/**
 *  Strings as Lists of Characters
 *  
 *  A string can be treated as a list of characters where the first character has index 0.
 *  You can access an individual character of the string using square brackets and the index of the letter you want to retrieve.
 *  Alternatively, there is also the charAt method.
 * 
 *  'cat'[1]; // => 'a'
 *  'cat'.charAt(2); // => 't'
 * 
 *  You can determine the number of characters in a string by accessing the length property.
 *  'cat'.length; // => 3
 */ 

/**
 *  Concatenation and Methods
 * 
 *  The simplest way to concatenate strings is to use the addition operator '+'
 *  'I like' + ' ' + 'cats.'; // => "I like cats."
 * 
 *  Strings provide a lot of helper methods. The following list shows some commonly used helpers.
 *  
 *  - toUpperCase and toLowerCase - change the case of all characters
 *  - trim - remove whitespace at the beginning and end
 *  - includes, startsWith and endsWith - determine whether another string is part of the given string
 *  - slice - extract a section of the string
 */

/**
 *  Strings are Immutable
 * 
 *  Applying the methods above will never change the original string. 
 *  Instead a new string will be created and returned.
 *  Strings (and other primitive data types) are immutable in JavaScript.
 *  That also means you cannot assign a different character at some index using the bracket syntax shown above (like you would in arrays).
 * 
 *  const str = 'cat';
 *  str[1] = 'u'; // fails silently
 *  console.log(str); // => 'cat'
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Get the first letter of a sentence
 *  To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.
 *  
 *  To end up with a nice password, the members of the poetry club like to use acrostic poems. 
 *  This means that the first letter of each sentence forms a word.
 *  Here is an example by one of their favorite writers Michael Lockwood.
 * 
 *  - Stands so high
 *  - Huge hooves too
 *  - Impatiently waits for
 *  - Reins and harness
 *  - Eager to leave
 * 
 *  So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.
 *  Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.
 */

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
const frontDoorResponse = (line) => {
    line = line.trim();

    return line[0];
}

frontDoorResponse('Stands so high');

/**
 *  Capitalize a word
 * 
 *  Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.
 *  Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.
 */

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
const frontDoorPassword = (word) => {
    word = word.trim();
    word = word.toLowerCase();
    word = word.replace(word[0], word[0].toUpperCase());
    
    return word;
}

frontDoorPassword('SHIRE'); // => "Shire"
frontDoorPassword('shire'); // => "Shire"

/**
 *  Get the last letter of a sentence
 * 
 *  To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you.
 *  The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word:
 * 
 *  - Stands so high
 *  - Huge hooves too
 *  - Impatiently waits for
 *  - Reins and harness
 *  - Eager to leave
 * 
 *  When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.
 *  Note that sometimes the guard does stylistic pauses (in the form of whitespace) at the beginning or at the end of a line. 
 *  You will need to ignore those pauses to derive the correct letter.
 *  Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.
 */

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
const backDoorResponse = (line) => {
    line = line.trim();

    return line[line.length-1];
}

backDoorResponse('Stands so high   '); // => "

/**
 *  Be polite
 * 
 *  To enter the poetry club via the back door, you need to be extra polite. 
 *  So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end.
 *  Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.
 */

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
const backDoorPassword = (word) => {
    let nword = '';
    
    word = word.trim();
    nword = word[0].toUpperCase();
    nword += word.slice(1,word.length).toLocaleLowerCase();

    return nword + ', please';
}

backDoorPassword('horse'); // => "Horse, please"