// object.create() makes the prototype inheritance possible in JS.

// Every object in JS is created from this master object. and it's name is
// Object "O" -- master constructor.

// .dir -- helps us to look at it in details.
console.dir(Object)

// Object.create() = takes 2 args.
// 1st args. -- some sort of object prototype.
// 2nd args. -- some sort of property. ? -- optional.

const myObject = Object.create(Object.prototype)

// object literal == {}
// it's also created using the Object.create internally.

const Watch = function (shape: string) {
  this.shape = shape
}

// here we're running the constructor
// so this has the shape property.
const watch1 = new Watch("cirlce")
// but this doesn't
const watch2 = Object.create(Watch.prototype)

// but they are setting to the same reference for the prototype.

Watch.prototype = {
  getShape() {
    return this.shape
  },
}

// Now, besides creating objects, the main objective of Object.create is to "extend constructors"

// inheritance.

const SmartWatch = function () {}

SmartWatch.prototype = Object.create(Watch.prototype)

const appleSmartWatch = new SmartWatch()

// to verify inheritance
console.log(appleSmartWatch instanceof Watch)
console.log(appleSmartWatch instanceof SmartWatch)
console.log(appleSmartWatch instanceof Object)

console.dir(SmartWatch.prototype.isPrototypeOf(appleSmartWatch))

// in a nutshell Object.create helps to extend a constructor.
// you just set a reference from the 'subclass' to the 'base class'. -- so, it's a prototype reference.
// so you're not really copying anything unlike using the class Keywork.
