/**
 *  Explanation
 * 
 *  Besides primitive data types like number and string, there is another important data type in JavaScript called object.
 * 
 *  In other languages, all values in a map often need to have the same data type.
 *  In JavaScript, only the type of the key is restricted: it has to be a string.
 *  The values inside one object can have different types.
 *  They can be primitive types like numbers but also arrays, other objects or even functions.
 *  This makes objects very versatile so that they are also key entities for object-oriented programming (OOP) in JavaScript.
 */

/**
 *  Retrieving a Value
 * 
 *  There are two ways to retrieve the value for a given key, dot notation and bracket notation.
 * 
 *  Using the dot notation as a shorthand has the same restriction as omitting the quotation marks.
 *  It only works if the key follows the identifier naming rules.
 * 
 *  If you try to retrieve a key that does not exist in the object, JavaScript returns undefined.
 *  See Null and Undefined for more details on this.
 * 
 * You can chain the keys if you want to retrieve a value from a nested object.
 * 
 *  const obj = {
 *      greeting: 'hello world';
 *      address: {
 *          street: 'Trincomalee Highway',
 *          city: 'Batticaloa',
 *      },
 *  };
 * 
 *  obj.greeting; // => hello world
 * 
 *  obj.address.city; // => 'Batticaloa'
 *  obj['address']['city']; // => 'Batticaloa'
 *  obj.address['city']; // => 'Batticaloa'
 */

/**
 *  Adding or Changing a Value
 * 
 *  You can add or change a value using the assignment operator =. 
 *  Again, there are dot and bracket notations available.
 * 
 *  const obj = { greeting: 'hello world' };
 *  
 *  obj.greeting = 'Hi there!';
 *  obj['greeting'] = 'Welcome.';
 *  
 *  obj.newKey1 = 'new value 1';
 *  obj['new key 2'] = 'new value 2';
 * 
 *  console.log(obj['new key 2']);
 */

/**
 *  Deleting an Entry
 * 
 *  You can delete a key-value pair from an object using the 'delete' keyword.
 * 
 *  Es importante tener en cuenta que delete elimina la propiedad, pero no afecta a la estructura del objeto en términos de longitud. 
 *  Si deseas también reducir la longitud del objeto, podrías considerar asignar un valor undefined o utilizar métodos como splice en arrays (si los objetos son array-like) para eliminar elementos en lugar de delete.
 * 
 *  const obj = {
 *      key1: 'value1',
 *      key2: 'value2',
 *  };
 *  
 * delete obj.key1;
 */

/**
 *  Checking Whether a Key Exists
 * 
 *  You can check whether a certain key exists in an object with the hasOwnProperty method.
 * 
 *  const obj = { greeting: 'hello world' };
 *  
 *  obj.hasOwnProperty('greeting'); // => true
 *  obj.hasOwnProperty('age'); // => false 
 */

/**
 *  Keys, Values and Entries
 * 
 *  The built-in object Object provides helper methods to retrieve all the keys, values or entries of a given object as arrays.
 * 
 *  const obj = {
 *      name: 'Ali',
 *      age: 65,
 *  };
 * 
 *  Object.keys(obj); // => [ 'name', 'age' ]
 *  Object.values(obj); // => [ 'Ali', 65 ]
 *  Object.entries(obj); // => [ [ 'name', 'Ali' ], [ 'age', 65 ] ]
 */

/**
 *  Truly Empty Object
 * 
 *  You might have noticed that an empty object in JavaScript is not completely empty.
 *  For example, it contains the hasOwnProperty method and other methods like toString.
 *  Usually, that does not cause any problems but if you ever need to create a truly empty object use a null object that can be created via Object.create(null).
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Create a new high score board
 *  
 *  Create a function createScoreBoard that creates an object that serves as a high score board.
 *  The keys of this object will be the names of the players, the values will be their scores.
 *  For testing purposes, you want to directly include one entry in the object.
 *  This initial entry should consist of The Best Ever as player name and 1000000 as score.
 */

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
const createScoreBoard = () => {
    const scoreboard = {
        'The Best Ever': 1000000
    };
    return scoreboard;
}

createScoreBoard(); // returns an object with one initial entry

/**
 *  Add players to a score board
 *  
 *  To add a player to the high score board, define the function addPlayer. It accepts 3 parameters:
 *  
 *  - The first parameter is an existing score board object.
 *  - The second parameter is the name of a player as a string.
 *  - The third parameter is the score as a number.
 * 
 *  The function returns the same score board object that was passed in after adding the new player.
 */

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
const addPlayer = (scoreBoard, player, score) => {
    scoreBoard[player] = score;
    return scoreBoard;
}

addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373); // => {'Dave Thomas': 0, 'José Valim': 486373}

/**
 *  Remove players from a score board
 *  
 *  If players violate the rules of the arcade hall, they are manually removed from the high score board. Define removePlayer which takes 2 parameters:
 * 
 *  - The first parameter is an existing score board object.
 *  - The second parameter is the name of the player as a string.
 *  
 *  This function should remove the entry for the given player from the board and return the board afterwards.
 *  If the player was not on the board in the first place, nothing should happen to the board.
 *  It should be returned as is.
 */

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
const removePlayer = (scoreBoard, player) => {
    delete scoreBoard[player];
    return scoreBoard;
}
removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas'); // => {}
removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'); // => { 'Dave Thomas': 0 }

/**
 *  Increase a player's score
 * 
 *  If a player finishes another game at the arcade hall, a certain amount of points will be added to the previous score on the board. Implement updateScore, which takes 3 parameters:
 * 
 *  - The first parameter is an existing score board object.
 *  - The second parameter is the name of the player whose score should be increased.
 *  - The third parameter is the score that you wish to add to the stored high score.
 *  
 *  The function should return the score board after the update was done.
 */

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
const updateScore= (scoreBoard, player, points) => {
    scoreBoard[player] += points;
    return scoreBoard
}

updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73); // => {"Freyja Ćirić", 12771081}

/**
 *  Apply Monday bonus points
 *  
 *  The arcade hall keeps a separate score board on Mondays.
 *  At the end of the day, each player on that board gets 100 additional points.
 * 
 *  Implement the function applyMondayBonus that accepts a score board.
 *  The function adds the bonus points for each player that is listed on that board.
 *  Afterwards, the board is returned.
 */

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
const applyMondayBonus = (scoreBoard) => {
    for(let key in scoreBoard){
        scoreBoard[key] += 100;
    }
    return scoreBoard;
}

const scoreBoard = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
};

applyMondayBonus(scoreBoard); // => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }

/**
 *  Normalize a high score
 * 
 *  Different arcade halls award different score points.
 *  To celebrate the best arcade player in town, a player's score needs to be normalized so scores from different arcade halls become comparable.
 * 
 *  Write a function normalizeScore. 
 *  To practice your object skills, instead of two parameters this function should accept one object as a parameter.
 *  That object contains a key score with the value being a player's score (a number).
 *  There is also a second key normalizeFunction that has a function as its value.
 *  This function takes a score as an argument and returns the corrected score.
 * 
 *  Your function normalizeScore should return the normalized score that you get after applying the normalization function to the score that was passed in.
 */

const normalizeScore = (params) => {
    params.score = params.normalizeFunction(params.score)
    return params.score
}

const params = {
    score: 400,
    normalizeFunction: (score) => {
        return 2 * score + 10;
    },
};

normalizeScore(params); // => 810
