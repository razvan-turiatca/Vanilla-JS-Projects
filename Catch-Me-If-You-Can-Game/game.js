let map = `
▧▧▧▧▧▧▧▧▧▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◉◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻▣◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧▧▧▧▧▧▧▧▧▧
`

const hero = '◉'
const enemy = '▣'
const path = '◻'
const wall = '▧'
const obstacles = ['▣', '▧', '◉']
const idx = (char) => {
  return map.indexOf(char)
}
const renderMap = (map) => {
  gameMapContainer.innerHTML = map
}

// movement
const moveRight = (map, char) => {
  // let idx = map.indexOf(char)
  return !obstacles.includes(map[idx(char) + 1])
    ? map.slice(0, idx(char)).concat(path, char, map.slice(idx(char) + 2))
    : map
}

const moveLeft = (map, char) => {
  // let idx = map.indexOf(char)
  return !obstacles.includes(map[idx(char) - 1])
    ? map.slice(0, idx(char) - 1).concat(char, path, map.slice(idx(char) + 1))
    : map
}

const moveDown = (map, char) => {
  // let idx = map.indexOf(char)
  // console.log(map.slice(0, idx))
  return !obstacles.includes(map[idx(char) + 11])
    ? map
        .slice(0, idx(char))
        .concat(path, map.slice(idx(char) + 1, idx(char) + 11))
        .concat(char, map.slice(idx(char) + 12))
    : map
}

const moveUp = (map, char) => {
  // let idx = map.indexOf(char)
  return !obstacles.includes(map[idx(char) - 11])
    ? map
        .slice(0, idx(char) - 11)
        .concat(char, map.slice(idx(char) - 10, idx(char)))
        .concat(path, map.slice(idx(char) + 1))
    : map
}

// const idx = (el) => {
//   return map.indexOf(el)
// }

// const shoot = (map) => {
//   // let idx = map.indexOf(hero)
//   return map.slice(0, idx(hero) - 1).concat('◅', map.slice(idx(hero)))
// }

function action(e) {
  if (e.code == 'ArrowDown') {
    map = moveDown(map, hero)
    renderMap(map)
  } else if (e.code == 'ArrowUp') {
    map = moveUp(map, hero)
    renderMap(map)
  } else if (e.code == 'ArrowLeft') {
    map = moveLeft(map, hero)
    renderMap(map)
  } else if (e.code == 'ArrowRight') {
    map = moveRight(map, hero)
    renderMap(map)
  }
}
//  else if (e.keyCode == 32) {
//   let newMap = shoot(map)
//   renderMap(newMap)
// }

function actionEnemy(direction) {
  if (direction == 'Down') {
    map = moveDown(map, enemy)
    renderMap(map)
  } else if (direction == 'Up') {
    map = moveUp(map, enemy)
    renderMap(map)
  } else if (direction == 'Left') {
    map = moveLeft(map, enemy)
    renderMap(map)
  } else if (direction == 'Right') {
    map = moveRight(map, enemy)
    renderMap(map)
  }
}

// if()

// if (map.indexOf(hero) < map.indexOf(enemy)) {
//   let timer = setInterval(() => {
//     enemyMovement('Up')
//   }, 500)
// } else {
//   clearInterval(timer)
//   setInterval(() => {
//     enemyMovement('Down')
//   }, 500)
// }

setInterval(() => {
  let idxP = map.indexOf('◉')
  let idxE = map.indexOf('▣')
  let idxDiff = idxE - idxP
  let rows = Math.round(idxDiff / 11)
  let cols = idxDiff - rows * 11
  if (idxP == -1) {
    // this condition will stop the enemy from moving up when hero is dead
    actionEnemy('Stop')
  } else if (rows > 0) {
    if (cols > 0) {
      actionEnemy('Up')
      actionEnemy('Left')
    } else if (cols < 0) {
      actionEnemy('Up')
      actionEnemy('Right')
    } else {
      actionEnemy('Up')
    }
  } else if (rows < 0) {
    if (cols > 0) {
      actionEnemy('Down')
      actionEnemy('Left')
    } else if (cols < 0) {
      actionEnemy('Down')
      actionEnemy('Right')
    } else {
      actionEnemy('Down')
    }
  } else if (rows == 0) {
    if (cols > 0) {
      actionEnemy('Left')
    } else if (cols < 0) {
      actionEnemy('Right')
    }
  }
}, 1000)

////////////////////////////////
renderMap(map)
