/**
 *  Errors are useful to report when something is wrong or unexpected in a program or a piece of code.
 * 
 *  They are javascript objects.
 * 
 *  The main property of this object is message:
 *  - const error = new Error('Oops, something went wrong');
 *  - throw new Error('Oops');
 * 
 *  When an Error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.
 *  
 *  try {
 *    throw new Error('Oops');
 *  } catch (error) {
 *    console.log(error.message);
      // => "Oops"
 *  }
 * 
 *  As with any class in JavaScript, subclasses can inherit from Error to create Custom errors by using the extends keyword.
 *  The instanceof syntax will check if the error caught is an instance of a particular subclass of Error.
 * 
 *  class CustomError extends Error {}
 *  try {
      // ... Code that may throw an error
 *  } catch (error) {
 *    if (error instanceof CustomError) {
 *      console.log('The error thrown is an instance of the CustomError');
 *    }
 *  }
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *  Monitor the humidity level of the room
 *  
 *  Your first mission is to write a piece of software to monitor the humidity level of the production room.
 *  There is already a sensor connected to the software of the company that returns periodically the humidity percentage of the room.
 *  
 *  You need to implement a function in the software that will throw an error if the humidity percentage is too high.
 *  The function should be called checkHumidityLevel and take the humidity percentage as a parameter.
 *  
 *  You should throw an error (the message is not important) if the percentage exceeds 70%.
 */

/**
 * 
 * @param {number} humidityPercentage 
 * @returns {undefined | error}
 */
const checkHumidityLevel = (humidityPercentage) => {
    try{
        if(humidityPercentage > 70){
            throw new Error('Humidity percentage is too high!');
        }
    }catch(error){
        console.log(error.message);
        //throw error;
    }
}

//checkHumidityLevel(60); // => undefined
//checkHumidityLevel(100); // Throws an error

/**
 *  Detect overheating
 *  
 *  Elena is very pleased with your first assignment and asks you to deal with the monitoring of the machines' temperature.
 *  While chatting with a technician, Greg, you are told that if the temperature of a machine exceeds 500°C,
 *  the technicians start worrying about overheating.
 *  
 *  The machine is equipped with a sensor that measures its internal temperature.
 *  You should know that the sensor is very sensitive and often breaks. In this case, the technicians will need to change it.
 *  
 *  Your job is to implement a function reportOverheating that takes the temperature as a parameter and throws an error
 *  if the sensor is broken or if the machine starts overheating. Knowing that you will later need to react differently 
 *  depending on the error, you need a mechanism to differentiate the two kinds of errors.
 *  You could rely on the error messages, but this would make your code fragile as it would break if the message gets
 *  updated. So to be able to do so properly, you'll throw instances of different error classes.
 * 
 * 
 *  - If the sensor is broken, the temperature will be null. In this case, you should throw an ArgumentError.
 *  - When everything works, if the temperature exceeds 500°C, you should throw an OverheatingError.
 *       This error class will be instantiated with a temperature argument.
 *       Make sure that the OverheatingError you throw has a temperature property attached to it.
 */

class ArgumentError extends Error {
    constructor(){
        super('Sensor is broken')
        this.name = 'ArgumentError'
    }
}

class OverheatingError extends Error{
    constructor(temperature){
        super(`Overheating detected ${temperature}°C`)
        this.name = 'OverheatingError';
        this.temperature = temperature;
    }
}

/**
 * 
 * @param {null | number} temperature 
 * @returns {undefined | error}
 */
const reportOverheating = function(temperature){
    try {
        if (temperature === null) {
            throw new ArgumentError();
        }
        if (temperature >= 500) {
            throw new OverheatingError(temperature);
        }
    } catch (error) {
        //console.log(error.message);
        throw error;
    }
}

//reportOverheating(null); // Throws an ArgumentError
//reportOverheating(800); // Throws an OverheatingError

/**
 *   Monitor the machine
 * 
 *  Now that your machine can detect errors, you will implement a function that reacts to those errors in different ways :
 * 
 *  - If the sensor is broken, you need to warn a technician
 *  - If the temperature is too high, you will either shut down the machine if the temperature exceeds 600°C or
 *       turn on a warning light if it is less than that.
 *  - If another error happens, you'll rethrow it.
 * 
 *  Implements a function monitorTheMachine that takes an argument actions.
 * 
 *  actions is an object that has 4 properties :
 *  
 *  - check is a function that, when called, checks the temperature of the machine. It may throw various errors
 *  - alertDeadSensor is a function that, when called, alerts a technician that the temperature's sensor is dead. 
 *  - alertOverheating is a function that, when called, will turn on a warning light on the machine.
 *  - shutdown is a function that, when called, will turn off the machine.
 *   
 *  The monitorTheMachine function should call check(). If it passes, the function should not return anything.
 *  However, it may throw an error. When this happens, you should, depending on the error:
 * 
 *  - ArgumentError: when this happens, call the alertDeadSensor function.
 *  - OverheatingError: when this happens, if the temperature is less than 600 °C,
 *       call the alertOverheating function to turn on the warning light.
 *       If the temperature exceeds 600°C, the situation is critical, call the shutdown function.
 *  - anything else: when this happens, rethrow the error
 */

/**
 * 
 * @param {actions} actions 
 * @returns {undefined | error}
 */

const monitorTheMachine = function(actions){
    try {
        actions.check();

    } catch (error) {
        if (error instanceof ArgumentError) {
            actions.alertDeadSensor();

        } else if (error instanceof OverheatingError) {
            if (error.temperature < 600) {
                actions.alertOverheating();
                
            } else {
                actions.shutdown();

            }
        } else {
            console.log(error.message);
            throw error;
        }
    }
}

const actions = {
    check: () => {
        const temperature = (value) => {
            if(value === undefined){
                value = Math.round(Math.random() * 1000)
                return (value <= 400)? null: value;
            }
            return value;
        };
        reportOverheating(temperature());
        console.log("Temperature is within acceptable range.");
    },
    alertDeadSensor: () => {
        console.log('Alert: Dead sensor! Technician needed.');
    },
    alertOverheating: () => {
        console.log('Warning light turned on. Temperature is too high.');
    },
    shutdown: () => {
        console.log('Critical situation! Shutting down the machine.');
    },
}

monitorTheMachine(actions);


