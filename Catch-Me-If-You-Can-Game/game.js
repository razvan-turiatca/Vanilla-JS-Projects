let map = `
□□□□□□□□□□
□▫▫●▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□▫▫▫▫▫▫▫▫□
□□□□□□□□□□
`

const renderMap = (map) => {
  gameMapContainer.innerHTML = map
}

renderMap(map)

// movement
const moveRight = (map) => {
  let idx = map.indexOf('●')
  return map[idx + 1] != '□'
    ? map.slice(0, idx).concat('▫●', map.slice(idx + 2))
    : map
}

const moveLeft = (map) => {
  let idx = map.indexOf('●')
  return map[idx - 1] != '□'
    ? map.slice(0, idx - 1).concat('●▫', map.slice(idx + 1))
    : map
}

const moveDown = (map) => {
  let idx = map.indexOf('●')
  // console.log(map.slice(0, idx))
  return map[idx + 12] != '□'
    ? map
        .slice(0, idx)
        .concat('▫', map.slice(idx + 1, idx + 11))
        .concat('●', map.slice(idx + 12))
    : map
}

const moveUp = (map) => {
  let idx = map.indexOf('●')
  return map[idx - 11] != '□'
    ? map
        .slice(0, idx - 11)
        .concat('●', map.slice(idx - 10, idx))
        .concat('▫', map.slice(idx + 1))
    : map
}

function action(e) {
  console.log(e)
  if (e.code == 'ArrowDown') {
    map = moveDown(map)
    renderMap(map)
  } else if (e.code == 'ArrowUp') {
    map = moveUp(map)
    renderMap(map)
  } else if (e.keyCode == 37) {
    map = moveLeft(map)
    renderMap(map)
  } else if ((e.keyCode = 39)) {
    map = moveRight(map)
    renderMap(map)
  } else if (e.keyCode == 32) {
    console.log('stop')
    // map = shoot(map)
    // renderMap(map)
  }
  // renderMap(map)
}

////////////////////////////////
renderMap(map)
