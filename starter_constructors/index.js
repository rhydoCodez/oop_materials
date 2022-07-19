// // const sum = (a, b) => {
// //   const result = a + b
// //   return result
// // }

// function sum(a, b) {
//   let result = a + b
//   return result
// }

// console.log(sum(1, 2))

// let Jotter = function (width, noOfPages) {
//   if (!new.target) throw "Jotter() must be called with new keyword."
//   this.width = width
//   this.noOfPages = noOfPages
// }

// console.log(Jotter)

// // __proto__
// const jotter1 = new Jotter()
// console.log("jotter1 : ", jotter1)

// const jotter2 = Jotter(20, 13)
// console.log("jotter 2: ", jotter2)

let Bike = function (_color) {
  // setter
  this.setColor = function (color) {
    _color = color
  }

  // getter
  this.getColor = function () {
    return _color
  }
}

const bike1 = new Bike("green")
console.log(bike1)
bike1.setColor("green")
console.log(bike1._color)
console.log("getColor: ", bike1.getColor())
