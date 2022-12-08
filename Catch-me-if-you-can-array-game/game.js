let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 3, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

// variables

const hero = 2
const enemy = 3
const path = 0
const wall = 1
const obstacles = [3, 1, '◉']
const idx = (char) => {
  return map.indexOf(char)
}

// rendering the game map

const renderMap = (map) => {
  let output = ''
  map.forEach((row) => {
    row.forEach((col) =>
      col == 0
        ? (output += '◻')
        : col == 1
        ? (output += '▧')
        : col == 2
        ? (output += '◉')
        : (output += '▣'),
    )
    output += '\n'
  })

  gameMapContainer.innerHTML = output
}

// movement

const obj = {}

const find = (map, el) => {
  map.forEach((arr, i) => {
    if (arr.includes(el)) {
      obj.row = map.indexOf(arr)
      obj.col = arr.indexOf(el)
    }
  })
}

const move = (map, char, y, x) => {
  // find(map, char)
  if (!obstacles.includes(map[obj.row + y][obj.col + x])) {
    map[obj.row + y][obj.col + x] = hero
    map[obj.row][obj.col] = path
  }

  return map
}

const moveRight = (map, char) => {
  find(map, char)
  map[obj.row][obj.col + 1] = char
  map[obj.row][obj.col] = 0
  return map
}
const moveDown = (map, char) => {
  find(map, char)
  map[obj.row + 1][obj.col] = char
  map[obj.row][obj.col] = 0
  return map
}

const moveLeft = (map, char) => {
  find(map, char)

  map[obj.row][obj.col - 1] = char
  map[obj.row][obj.col] = 0
  return map
}

const moveUp = (map, char) => {
  find(map, char)
  map[obj.row - 1][obj.col] = char
  map[obj.row][obj.col] = 0
  return map
}

function action(e) {
  if (e.code == 'ArrowDown') {
    find(map, hero)
    move(map, hero, 1, 0)

    renderMap(map)
  } else if (e.code == 'ArrowUp') {
    find(map, hero)
    move(map, hero, -1, 0)

    renderMap(map)
  } else if (e.code == 'ArrowLeft') {
    find(map, hero)
    move(map, hero, 0, -1)

    renderMap(map)
  } else if (e.code == 'ArrowRight') {
    find(map, hero)
    move(map, hero, 0, 1)
    // map[2][3] = hero

    renderMap(map)
  }
}

function actionEnemy(direction) {
  if (direction == 'Down') {
    moveDown(map, 3)
    renderMap(map)
  } else if (direction == 'Up') {
    moveUp(map, 3)
    renderMap(map)
  } else if (direction == 'Left') {
    moveLeft(map, 3)
    renderMap(map)
  } else if (direction == 'Right') {
    moveRight(map, 3)
    renderMap(map)
  }
}

renderMap(map)
