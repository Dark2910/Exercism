/**
 *  Constructor Function
 * 
 *  In JavaScript, the template (class) is facilitated by a regular function.
 *  When a function is supposed to be used as such a template,
 *  it is called a constructor function and the convention is that the function name should start with a capital letter.
 *  Instances (objects) are derived from the template using the new keyword when invoking the constructor function.
 * 
 *  function Car() {}
 *  
 *  const myCar = new Car();
 *  const yourCar = new Car();
 */

/**
 *  Instance fields
 * 
 *  Often, you want all the derived objects (instances) to include some fields and pass some initial values
 *  for those when the object is constructed. This can be facilitated via the this keyword.
 *  Inside the constructor function, this represents the new object that will be created via new.
 *  this is automatically returned from the constructor function when it is called with new.
 * 
 *  That means we can add fields to the new instance by adding them to this in the constructor function.
 * 
 *  function Car(color, weight) {
 *      this.color = color;
 *      this.weight = weight;
 *      this.engineRunning = false;
 *  }
 *  
 *  const myCar = new Car('red', '2mt');
 *  myCar.color; // => 'red'
 *  myCar.engineRunning; // => false
 */

/**
 *  Instance Methods
 * 
 *  Methods are added via the prototype property of the constructor function.
 *  Inside a method, you can access the fields of the instance via this.
 *  This works because of the following general rule.
 * 
 *  When a function is called as a method of an object, its this is set to the object the method is called on.
 * 
 * 
 *  function Car() {
 *    this.engineRunning = false;
 *  }
 *  
 *  Car.prototype.startEngine = function () {
 *    this.engineRunning = true;
 *  };
 *  
 *  Car.prototype.addGas = function (litre) {
 * 
 *  };
 * 
 *  const myCar = new Car();
 *  myCar.startEngine();
 *  myCar.engineRunning; // => true
 */

/**
 *  The Prototype Chain
 * 
 *  myCar in the example above is a regular JavaScript object and if we would inspect it (e.g. in the browser console),
 *  we would not find a property startEngine with a function as a value directly inside the myCar object.
 *  So how does the code above even work then?
 *  
 *  The secret here is called the prototype chain.
 *  When you try to access any property (field or method) of an object,
 *  JavaScript first checks whether the respective key can be found directly in the object itself.
 *  If not, it continues to look for the key in the object referenced by the [[prototype]] property of the original object.
 *  As mentioned before, in our example [[prototype]] points to the prototype property of the constructor function.
 *  That is where JavaScript would find the startEngine function because we added it there.
 * 
 *  function Car() {
 * 
 *  }
 *  
 *  Car.prototype.startEngine = function () {
 * 
 *  };
 * 
 *  And the chain does not end there.
 *  The [[prototype]] property of Car.prototype (myCar.[[prototype]].[[prototype]]) references Object.prototype (the prototype property of the Object constructor function).
 *  It contains general methods that are available for all JavaScript objects, e.g. toString().
 *  In conclusion, you can call myCar.toString() and that method will exist because JavaScript searches for that method throughout the whole prototype chain.
 * 
 *  Caution
 * 
 *  Note that the prototype chain is only travelled when retrieving a value.
 *  Setting a property directly or deleting a property of an instance object only targets that specific instance.
 *  This might not be what you would expect when you are used to a language with class-based inheritance.
 */


/**
 *  Class Syntax 
 * 
 *  Nowadays, JavaScript supports defining classes with a class keyword.
 *  This was added to the language specification in 2015. On the one hand,
 *  this provides syntactic sugar that makes classes easier to read and write.
 *  The new syntax is more similar to how classes are written in languages like C++ or Java.
 *  Developers switching over from those languages have an easier time adapting.
 *  On the other hand, class syntax paves the way for new language features that are not available in the prototype syntax.
 */


/**
 *  Class Declarations
 * 
 *  With the new syntax, classes are defined with the class keyword,
 *  followed by the name of the class and the class body in curly brackets.
 *  The body contains the definition of the constructor function, i.e. a special method with the name constructor.
 *  This function works just like the constructor function in the prototype syntax.
 *  The class body also contains all method definitions.
 *  The syntax for the methods is similar to the shorthand notation we have seen for adding functions as values inside an object.
 * 
 * 
 *  class Car {
 *      constructor(color, weight) {
 *          this.color = color;
 *          this.weight = weight;
 *          this.engineRunning = false;
 *      }
 *      startEngine() {
 *          this.engineRunning = true;
 *      } 
 *      addGas(litre) {
 * 
 *      }
 *  }
 *  
 *  const myCar = new Car();
 *  myCar.startEngine();
 *  myCar.engineRunning; // => true
 */

/** 
 *  Private Fields, Getters and Setters
 *  
 *  By default, all instance fields are public in JavaScript.
 *  They can be directly accessed and assigned to.
 *  
 *  However, there is an established convention that fields and methods that start with an underscore should be treated as private.
 *  They should never be accessed directly from outside the class.
 *  
 *  Private fields are sometimes accompanied by getters and setters.
 *  With the keywords get and set you can define functions that are executed when a property with the same name as the function is accessed or assigned to.
 * 
 *  class Car {
 *      constructor() {
 *          this._mileage = 0;
 *      }
 *  
 *      get mileage() {
 *          return this._mileage;
 *      }
 *  
 *      set mileage(value) {
 *          throw new Error(`Mileage cannot be manipulated, ${value} is ignored.`);
 *      }
 *  }
 *  
 *  const myCar = new Car();
 *  myCar.mileage; // => 0
 *  myCar.mileage = 100; // => Error: Mileage cannot be manipulated, 100 is ignored.
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Define Size for storing the dimensions of the window
 * 
 *  Define a class (constructor function) named Size.
 *  It should have two fields width and height that store the window's current dimensions.
 *  The constructor function should accept initial values for these fields.
 *  The width is provided as the first parameter, the height as the second one.
 *  The default width and height should be 80 and 60, respectively.
 * 
 *  Additionally, define a method resize(newWidth, newHeight)
 *  that takes a new width and height as parameters and changes the fields to reflect the new size.
 */

class Size {
    width = 0;
    height = 0;

    constructor(width = 80, height = 60){
        this.width = width;
        this. height = height;
    }
    resize(width, height){
        this.width = width;
        this.height = height;
    }

}

const size = new Size(1080, 764);
size.width; // => 1080 
size.height; // => 764 

size.resize(1920, 1080); 
size.width; // => 1920 
size.height; // => 1080

/**
 *  Define Position to store a window position
 * 
 *  Define a class (constructor function) named Position with two fields,
 *  x and y that store the current horizontal and vertical position, respectively,
 *  of the window's upper left corner. The constructor function should accept initial values for these fields.
 *  The value for x is provided as the first parameter, the value for y as the second one.
 *  The default value should be 0 for both fields.
 *  
 *  The position (0, 0) is the upper left corner of the screen with
 *  x values getting larger as you move right and y values getting larger as you move down.
 *  
 *  Also define a method move(newX, newY) that takes new x and y parameters and changes
 *  the properties to reflect the new position.
 */

class Position {
    x = 0;
    y = 0;

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }

}

const point = new Position();
point.x; // => 0 
point.y; // => 0 

point.move(100, 200); 
point.x; // => 100 
point.y; // => 200

/**
 *  Define a ProgramWindow class
 *  
 *  Define a ProgramWindow class with the following fields:
 * 
 *  -   screenSize: holds a fixed value of type Size with width 800 and height 600
 *  -   size : holds a value of type Size, the initial value is the default value of the Size instance
 *  -   position : holds a value of type Position, the initial value is the default value of the Position instance
 * 
 *  When the window is opened (created), it always has the default size and position in the beginning.
 * 
 *  Side note: 
 *  The name ProgramWindow is used instead of Window to differentiate the class from
 *  the built-in Window class that exists in browser environments.
 */

class ProgramWindow {
    screenSize = new Size(800, 600);
    size = '';
    position = '';

    constructor (){
        this.size = new Size();
        this.position = new Position();
    }    

}

let programWindow = new ProgramWindow();
programWindow.screenSize.width; // => 800

/**
 *  Add a method to resize the window
 * 
 *  The ProgramWindow class should include a method resize.
 *  It should accept a parameter of type Size as input and attempts to resize the window to the specified size.
 * 
 *  However, the new size cannot exceed certain bounds.
 * 
 *  - The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1.
 * 
 *  - The maximum height and width depend on the current position of the window,
 *       the edges of the window cannot move past the edges of the screen.
 *       Values larger than these bounds will be clipped to the largest size they can take.
 *       E.g. if the window's position is at x = 400, y = 300 and a resize to height = 400, width = 300 is requested,
 *       then the window would be resized to height = 300, width = 300 as the screen is not large enough in the y direction to fully accommodate the request.
 */


ProgramWindow.prototype.resize = function(newSize){
    const minWidth = 1;
    const minHeight = 1;
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const clippedWidth  = Math.max(minWidth, Math.min(newSize.width, maxWidth));
    const clippedHeigth = Math.max(minHeight, Math.min(newSize.height, maxHeight));

    this.size.width = clippedWidth;
    this.size.height = clippedHeigth;
}

programWindow = new ProgramWindow();

const newSize = new Size(600, 400);
programWindow.resize(newSize);
programWindow.size.width; // => 600
programWindow.size.height; // => 400

/**
 * Add a method to move the window
 * 
 *  Besides the resize functionality, the ProgramWindow class should also include a method move.
 *  It should accept a parameter of type Position as input. The move method is similar to resize however,
 *  this method adjusts the position of the window to the requested value, rather than the size.
 * 
 *  As with resize the new position cannot exceed certain limits.
 * 
 *  - The smallest position is 0 for both x and y.
 * 
 *  - The maximum position in either direction depends on the current size of the window.
 *       The edges cannot move past the edges of the screen.
 *       Values larger than these bounds will be clipped to the largest size they can take.
 *       E.g. if the window's size is at x = 250, y = 100 and a move to x = 600, y = 200 is requested,
 *       then the window would be moved to x = 550, y = 200 as the screen is not large enough in the x direction to fully accommodate the request.
 */

ProgramWindow.prototype.move = function (newPosition) {
    const minX = 0;
    const minY = 0;
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const clippedX = Math.max(minX, Math.min(maxX, newPosition.x));
    const clippedY = Math.max(minY, Math.min(maxY, newPosition.y));

    this.position.x = clippedX;
    this.position.y = clippedY;
}


programWindow = new ProgramWindow();

const newPosition = new Position(50, 100);
programWindow.move(newPosition);
programWindow.position.x; // => 50
programWindow.position.y; // => 100


/**
 *  Change a program window
 * 
 *  Implement a changeWindow function that accepts a ProgramWindow instance as input and changes the window to the specified size and position.
 *  The function should return the ProgramWindow instance that was passed in after the changes were applied.
 * 
 *  The window should get a width of 400, a height of 300 and be positioned at x = 100, y = 150.
 */

const changeWindow = (programWindow) => {

    const newSize = new Size(400,300);
    const newPosition = new Position(100,150);

    programWindow.resize(newSize);
    programWindow.move(newPosition);
    
    return programWindow;
}

programWindow = new ProgramWindow();
changeWindow(programWindow);
programWindow.size.width; // => 400









