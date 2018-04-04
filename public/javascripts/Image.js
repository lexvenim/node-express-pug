var Dog = require("./Dog")
var helper = require("./helper")

class Image {
  constructor(){
    this.color = helper.random(100)
    this.class = "dog--" + this.color
    this.dog = new Dog()
  }
}

module.exports = Image