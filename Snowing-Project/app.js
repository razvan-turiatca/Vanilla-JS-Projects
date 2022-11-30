//SETTING
const containerW = 1000
const containerH = 800

let count = 1

setInterval(() => {
  if (count < 100) {
    addAnotherFlake()
  }
}, 150)

function addAnotherFlake() {
  count++
  let scale = randFloat(0.2, 1.5)
  let f = new Flake(count, randCoord(0, containerW - 20), 20, scale, scale)
  f.render(scene)
  f.fall(containerW, containerH, addAnotherFlake)
}
