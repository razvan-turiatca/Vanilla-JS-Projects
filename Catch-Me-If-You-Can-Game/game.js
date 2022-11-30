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

const moveRight = (map) => {
  let idx = map.indexOf('p')
  return map.slice(0, idx).concat('.p', map.slice(idx + 2))
}

const moveLeft = (map) => {
  let idx = map.indexOf('p')
  return map.slice(0, idx - 1).concat('p.', map.slice(idx + 1))
}

renderMap(map)
