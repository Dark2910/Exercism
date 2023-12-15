/**
 *  Null
 * 
 *  The primitive value null is used as an intentional "empty value" for a variable.
 *  In other languages, a similar construct might be used only for (missing) objects or pointer types.
 * In JavaScript null generally represents an empty value for any type.
 * 
 *  let name = null
 * 
 *  You can check whether a variable is null by using the strict equality operator '==='
 *  name === null;  // => true
 */

/**
 * Undefined
 * 
 *  A variable that has not been assigned a value is of type undefined
 * 
 *  That means while null represents an empty value (but still a value), undefined represents the total absence of a value.
 * 
 *  undefined appears in different contexts.
 * 
 *  - If a variable is declared without a value (initialization), it is undefined.
 *  - If you try to access a value for a non-existing key in an object, you get undefined.
 *  - If a function does not return a value, the result is undefined.
 *  - If an argument is not passed to a function, it is undefined, unless that argument has a default value.
 * 
 *  let name;
 *  console.log(name); // => undefined
 * 
 *  You can check whether a variable is undefined using the strict equality operator '===' or the typeof operator.
 * 
 *  let name;
 *  name === undefined; // => true
 *  typeof name === 'undefined'; // => true
 */

/**
 *  Optional Chaining
 * 
 * 
 *  Accessing a non-existent key in an object returns undefined in JavaScript.
 *  However, if you try to retrieve a nested value and the parent key does not exist,
 *  the evaluation of the nested key is performed on undefined and leads to TypeError: Cannot read property ... of undefined. 
 *  Theoretically, you would always need to check the parent key exists before you can try to retrieve the nested key. 
 *  This was often done with the AND operator && but for deeply nested values this leads to very lengthy expressions.
 * 
 *  Optional chaining was added to the language specification in 2020. 
 *  With the optional chaining operator '?.' you can ensure that JavaScript only tries to access the nested key if the parent was not null or undefined. 
 *  Otherwise undefined is returned.
 * 
 *  const obj = {
 *      address: {
 *          street: 'Trincomalee Highway',
 *          city: 'Batticaloa',
 *      },
 *  };
 *  
 *  obj.residence; // => undefined
 *  obj.address.zipCode; // => undefined
 *  obj.residence.street; // => TypeError: Cannot read property 'street' of undefined
 *  obj.residence?.street; // => undefined
 *  obj.residence?.street?.number; // => undefined
 */

/**
 *  Nullish Coalescing
 * 
 *  There are situations where you want to apply a default value in case a variable is null or undefined.
 *  In the past this was often done with a ternary operator ? or by utilizing lazy evaluation of the OR operator ||.
 *  This has the disadvantage that the default value is applied in all cases where the variable is falsy (e.g. '' or 0),
 *  not only when it is null or undefined. This can easily cause unexpected outcomes.
 * 
 *  let amount = null; 
 *  amount = amount || 1; // => 1
 * 
 *  amount = 0;
 *  amount = amount || 1; // => 1
 * 
 *  To address this, the nullish coalescing operator ?? was introduced.
 *  Just like optional chaining, it was added to the language specification in 2020.
 *  The nullish coalescing operator ?? returns the right-hand side operand only when the left-hand side operand is null or undefined.
 *  Otherwise, the left-hand side operand is returned.
 *  With that, a default value can now be applied more specifically.
 * 
 *  let amount = null;
 *  amount = amount ?? 1; // => 1
 * 
 *  amount = 0;
 *  amount = amount ?? 1; // => 0
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Create a new visitor
 *  
 *  When visitors come to the amusement park for the first time, they need to register by entering their name and age in a terminal and agreeing to the terms and conditions. Of course, they also need to buy a ticket. Each ticket has an identifier like H32AZ123.
 *  
 *  Write a function createVisitor that accepts three arguments.
 * 
 *  - The name of the visitor.
 *  - The age of the visitor.
 *  - The identifier of the ticket that the visitor bought.
 *  
 *  The function should return an object that holds this information. The keys in the object should be called name, age and ticketId.
 */

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
const createVisitor = (name, age, ticketId) => {
    return {
        name: name,
        age: age,
        ticketId: ticketId
    };
}

createVisitor('Verena Nardi', 45, 'H32AZ123'); // => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

/**
 *  Revoke the ticket
 * 
 *  When people leave the amusement park, their ticket gets revoked.
 *  If they come back, they need to buy a new one.
 *  To save regular visitors some time, they only need to register once and the visitor information will be kept for subsequent visits.
 *  
 *  That means when a visitor leaves the park, only their ticket should be invalidated but the rest of the visitor object should stay the same.
 *  Implement the function revokeTicket that accepts a visitor object, sets the ticket identifier to null and returns the object afterwards.
 */

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
const revokeTicket = (visitor) => {
    visitor.ticketId = null;
    return visitor
}

const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

revokeTicket(visitor); // => { name: 'Verena Nardi', age: 45, ticketId: null }

/**
 *  Determine the ticket status
 * 
 *  To prevent forgery, the ticket identifiers are unique.
 *  Once a ticket is printed, its identifier is added as a key in an object in the system so it can be tracked.
 *  
 *  Before the ticket is sold to a visitor, it is stored with the value null in the ticket tracking object.
 *  When it is sold to a visitor, the visitor's name is assigned as a value.
 *  When employees have doubts about the validity of a ticket, they need to check the status of the ticket in the system.
 *  
 *  Implement a function ticketStatus that accepts the tracking object and a ticket identifier as arguments.
 *  It should return one of the following results.
 * 
 *  - 'unknown ticket id' if the identifier was not found in the tracking object
 *  - 'not sold' in case the ticket was printed but not sold
 *  - 'sold to {name}' where {name} is the name of the visitor if the ticket was sold
 */

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
const ticketStatus = (tickets, ticketId) => {
    return (!tickets.hasOwnProperty(ticketId)) ? "unknown ticket id" :
        (tickets[ticketId] === null) ? "not sold" : `sold to ${tickets[ticketId]}`;
}

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};

ticketStatus(tickets, 'RE90VAW7'); // => 'unknown ticket id'
ticketStatus(tickets, '0H2AZ123'); // => 'not sold'
ticketStatus(tickets, '23LA9T41'); // => 'sold to Verena Nardi'


/**
 *  Improve the ticket status response
 * 
 *  After a while, you get feedback from the employees that they want the ticket status to be easier to understand at the first glance.
 *  They only want to see either the name of the visitor or that the ticket is invalid.
 *  
 *  Write a function simpleTicketStatus that accepts the same arguments as ticketStatus in task 3.
 *  This function only returns one of two different results.
 * 
 *  - the name of the visitor if the ticket was sold
 *  - 'invalid ticket !!!' if the ticket was not sold yet or the identifier was not found in the tracking object
 */

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
const simpleTicketStatus = (tickets, ticketId) => {
    let visitorName = tickets[ticketId];
    visitorName  = tickets[ticketId] ?? 'invalid ticket !!!'
    return visitorName;
}

simpleTicketStatus(tickets, '23LA9T41'); // => 'Verena Nardi'
simpleTicketStatus(tickets, '0H2AZ123'); // => 'invalid ticket !!!'
simpleTicketStatus(tickets, 'RE90VAW7'); // => 'invalid ticket !!!'

/**
 *  Determine the version of terms and conditions
 * 
 *  Due to new legal requirements, newly created visitor objects now also contain detailed information on the
 *  "General Terms & Conditions" (GTC) that the user agreed to.
 *  You can see an example of the new visitor object below.
 *  
 *  The cashiers of the amusement park now need to check whether a visitor needs to sign a new version of the GTC.
 *  For this, implement a function gtcVersion that accepts a visitor object as an argument and returns the GTC 
 *  version if it is available. If the version information is not available, nothing should be returned.
 */

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
const gtcVersion = (visitor) => {
    return visitor.gtc?.version;
}


const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    },
};

gtcVersion(visitorNew); // => '2.1'

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

gtcVersion(visitorOld); // => undefined