let map = `
▧▧▧▧▧▧▧▧▧▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◉◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧◻◻◻◻◻◻◻◻▧
▧▧▧▧▧▧▧▧▧▧
`

const hero = '◉'
const enemy = '〰'
const path = '◻'
const wall = '▧'

const renderMap = (map) => {
  gameMapContainer.innerHTML = map
}

// movement
const moveRight = (map) => {
  let idx = map.indexOf(hero)
  return map[idx + 1] != wall
    ? map.slice(0, idx).concat(path, hero, map.slice(idx + 2))
    : map
}

const moveLeft = (map) => {
  let idx = map.indexOf(hero)
  return map[idx - 1] != wall
    ? map.slice(0, idx - 1).concat(hero, path, map.slice(idx + 1))
    : map
}

const moveDown = (map) => {
  let idx = map.indexOf(hero)
  // console.log(map.slice(0, idx))
  return map[idx + 12] != wall
    ? map
        .slice(0, idx)
        .concat(path, map.slice(idx + 1, idx + 11))
        .concat(hero, map.slice(idx + 12))
    : map
}

const moveUp = (map) => {
  let idx = map.indexOf(hero)
  return map[idx - 11] != wall
    ? map
        .slice(0, idx - 11)
        .concat(hero, map.slice(idx - 10, idx))
        .concat(path, map.slice(idx + 1))
    : map
}

const idx = (el) => {
  return map.indexOf(el)
}

const shoot = (map) => {
  // let idx = map.indexOf(hero)
  return map.slice(0, idx(hero) - 1).concat('◅', map.slice(idx(hero)))
}

function action(e) {
  if (e.code == 'ArrowDown') {
    map = moveDown(map)
    renderMap(map)
  } else if (e.code == 'ArrowUp') {
    map = moveUp(map)
    renderMap(map)
  } else if (e.keyCode == 37) {
    map = moveLeft(map)
    renderMap(map)
  } else if (e.keyCode == 39) {
    map = moveRight(map)
    renderMap(map)
  } else if (e.keyCode == 32) {
    let newMap = shoot(map)
    renderMap(newMap)
  }
  // renderMap(map)
}

////////////////////////////////
renderMap(map)
