module.exports = {
  randomBetween: function (min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min
  },
  random: function (num) {
    return Math.floor(Math.random()*num)
  }
}