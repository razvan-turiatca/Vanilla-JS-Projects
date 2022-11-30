function randCoord(min, max) {
  return Math.floor(min + (max - min) * Math.random())
}

function randDelay(delay) {
  return Math.floor(delay * Math.random())
}

function randFloat(min, max) {
  return min + (max - min) * Math.random()
}
