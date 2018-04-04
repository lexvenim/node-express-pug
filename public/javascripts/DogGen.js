var Dog = require("./Dog")
var Position = require("./Position")
var helper = require("./helper")

var height = 1000
var width = 1500

class DogGen {
  static getDogs(amount){
    let dogs = []
    let errors = 0

    while(errors < 500){
      let pos = new Position(width, height)
      let rad = dogs.map(d => pos.distanceTo(d.pos, d.rad)).reduce((a,b) => Math.min(a,b), width)
      if(rad < 15) { errors+=1; continue }

      rad = helper.randomBetween(15, (rad > 50 ? 50 : rad))
      if((pos.x - rad) < 0 || (pos.x + rad) > width || (pos.y - rad) < 0 || (pos.y + rad) > height) { errors+=1; continue }

      dogs.push({color: helper.random(100), dog: new Dog(), pos: pos, rad: rad})
      errors = 0
    }

    return dogs
  }
}

module.exports = DogGen