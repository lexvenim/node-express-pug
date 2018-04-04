var breeds = require("./breeds")
var helper = require("./helper")

class Dog {
  constructor(){
    this.name = "temp"
    this.age = 1
    this.icon = "images/" + breeds.list[helper.random(breeds.list.length)]
  }
}

module.exports = Dog;