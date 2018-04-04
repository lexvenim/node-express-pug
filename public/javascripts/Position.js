var helper = require("./helper")

class Position {
  constructor(maxX, maxY){
    this.x = helper.random(maxX)
    this.y = helper.random(maxY)
  }

  distanceTo(pos, rad){
    return Math.sqrt(Math.pow(this.x - pos.x, 2) + Math.pow(this.y - pos.y, 2)) - rad
  }
}

module.exports = Position