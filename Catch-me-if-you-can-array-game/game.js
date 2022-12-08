let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 3, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

// variables

const hero = 2
const enemy = 3
const path = 0
const wall = 1
const obstacles = [3, 1]

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

// find coordinates

const obj = {}

const find = (map, el) => {
  map.forEach((arr, i) => {
    if (arr.includes(el)) {
      obj[`row${el}`] = map.indexOf(arr)
      obj[`col${el}`] = arr.indexOf(el)
    }
  })
}

// movement template

const move = (map, char, y, x) => {
  if (!obstacles.includes(map[obj[`row${char}`] + y][obj[`col${char}`] + x])) {
    map[obj[`row${char}`] + y][obj[`col${char}`] + x] = char
    map[obj[`row${char}`]][obj[`col${char}`]] = path
  }

  return map
}

// implementing movement logic for hero

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

    renderMap(map)
  }
}

// implementing movement logic for enemy

function actionEnemy(direction) {
  if (direction == 'Down') {
    find(map, enemy)
    move(map, enemy, 1, 0)
    renderMap(map)
  } else if (direction == 'Up') {
    find(map, enemy)
    move(map, enemy, -1, 0)
    renderMap(map)
  } else if (direction == 'Left') {
    find(map, enemy)
    move(map, enemy, 0, -1)
    renderMap(map)
  } else if (direction == 'Right') {
    find(map, enemy)
    move(map, enemy, 0, 1)
    renderMap(map)
  }
}

setInterval(() => {
  find(map, enemy)
  find(map, hero)
  if (obj.row2 < obj.row3) {
    actionEnemy('Up')
  } else if (obj.row2 > obj.row3) {
    actionEnemy('Down')
  }
  if (obj.col2 < obj.col3) {
    actionEnemy('Left')
  } else if (obj.col2 > obj.col3) {
    actionEnemy('Right')
  }
}, 700)

renderMap(map)
