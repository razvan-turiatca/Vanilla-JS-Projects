let map = `
##########
#.p......#
#........#
#........#
#........#
#........#
#........#
#........#
#........#
#........#
#........#
##########
`

const renderMap = (map) => {
  gameMapContainer.innerHTML = map
}

renderMap(map)

// movement
const moveRight = (map) => {
  let idx = map.indexOf('p')
  return map[idx + 1] != '#'
    ? map.slice(0, idx).concat('.p', map.slice(idx + 2))
    : map
}

const moveLeft = (map) => {
  let idx = map.indexOf('p')
  return map[idx - 1] != '#'
    ? map.slice(0, idx - 1).concat('p.', map.slice(idx + 1))
    : map
}

const moveDown = (map) => {
  let idx = map.indexOf('p')
  console.log(map.slice(0, idx))
  return map[idx + 12] != '#'
    ? map
        .slice(0, idx)
        .concat('.', map.slice(idx + 1, idx + 11))
        .concat('p', map.slice(idx + 12))
    : map
}

const moveUp = (map) => {
  let idx = map.indexOf('p')
  return map[idx - 11] != '#'
    ? map
        .slice(0, idx - 11)
        .concat('p', map.slice(idx - 10, idx))
        .concat('.', map.slice(idx + 1))
    : map
}

renderMap(map)
