var Dog = require("./Dog")
var helper = require("./helper")

class Image {
  constructor(){
    this.color = helper.random(100)
    this.size = 25 + helper.random(125)
    this.classes = ["dog", "color-" + this.color, "size-" + this.size]
    this.dog = new Dog()
  }
}

module.exports = Image