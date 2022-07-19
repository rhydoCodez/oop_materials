"use strict"

let pen = "hod"

let Car = function (color: string) {
  // this.color == is setting the property for the object that we'ld create from this constructor.
  this.color = color
  // this.foo
}

// -- take note of the naming convention "it's just good practice."
// calling a constructor is a little different from calling a regular function.
// create a car and set it's color to "yellow"
let yellowCar = new Car("yellow")

// javascript OOP is all about "prototype inheritance." __proto__

// __proto__ : is the creator of the Object (instance of a class). "new keyword."
// when you use the "new" -- keyword, it sets the property that you need to set inside the constructor,
// and then, it would have a reference to it's creator.
// so, the constructor is not the creator, but it's part of the creator.

// -------------- what happens when you call a constructor without the 'new' keyword? -------
// calling a constructor without the new keyword, would return "undefined".

// the reason it returns "undefined" is that it looks at it like it's a regular function.
// and if the function doesn't return anything. (if a function doesn't return anything, it basically returns "undefinded").

// so, the this.whatever is going to be like, added to the global object. so, it's going the add the consructor property to the global object... maybe windows... if client side or whatHaveYou.

// so to avoid that, there are 2 ways by which you can mitigate that.
// 1. you can do "use strict"
// when you do that, you won't be able to call contructors without "new" keyword.

// 2. you can add a line of code to your constructor.
let Fan = function (speed: number) {
  if (!new.target) throw "Fan() must be called with new keyword."

  this.speed = speed
}

// Note:
// you can't create a constructor with an arrow function / anonymous function.

// in JS, when you create 'properties' with constructor, they are all public properties.
// using the dot notation.

// JS doesn't have a concept of private properties. however, you can create one. using "closures."
// the way you do it is, instead of using "this.propertyName", we'll use a "setter" and a "getter".

let Bike = function (_color: string) {
  this.setColor = function (color: string) {
    _color = color
  }

  // also, we can have a getter function.
  this.getColor = function () {
    return _color
  }

  // and since there's no this.propertyName, Bike does not have that property, it just have a inner variable.
  // that can only be accessed using these methods -- because of the closures.
}

// so, when using this approach to create an Object, how then do we create methods for this object.
// the best way to do that is not to create the methods directly inside the object, instead, we
// should use it's prototype to set it's property.
