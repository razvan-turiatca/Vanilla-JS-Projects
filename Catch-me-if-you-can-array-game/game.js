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

const hero = '◉'
const enemy = '▣'
const path = '◻'
const wall = '▧'
const obstacles = ['▣', '▧', '◉']
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

  console.log(output)
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

const moveRight = (map, num) => {
  find(map, num)
  map[obj.row][obj.col + 1] = num
  map[obj.row][obj.col] = 0
  return map
}
const moveDown = (map, num) => {
  find(map, num)
  map[obj.row + 1][obj.col] = num
  map[obj.row][obj.col] = 0
  return map
}

const moveLeft = (map, num) => {
  find(map, num)
  map[obj.row][obj.col - 1] = num
  map[obj.row][obj.col] = 0
  return map
}

const moveUp = (map, num) => {
  find(map, num)
  map[obj.row - 1][obj.col] = num
  map[obj.row][obj.col] = 0
  return map
}

function action(e) {
  if (e.code == 'ArrowDown') {
    moveDown(map, 2)
    renderMap(map)
  } else if (e.code == 'ArrowUp') {
    moveUp(map, 2)
    renderMap(map)
  } else if (e.code == 'ArrowLeft') {
    moveLeft(map, 2)
    renderMap(map)
  } else if (e.code == 'ArrowRight') {
    moveRight(map, 2)
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
