import {GameObject} from './GameObject.js'

export class Board {
  constructor(kStr, kColumn) {
    this.kStr = kStr
    this.kColumn = kColumn

    this.gameObjects = new Array()
  }

  fillStr(i, gameObject, j1 = 0, j2 = this.kColumn) {
    for (let j = j1; j < j2; j++) {
      this.addGameObject(gameObject, i, j)
    }
  }

  fillColumn(j, gameObject, i1 = 0, i2 = this.kStr) {
    for (let i = i1; i < i2; i++) {
      this.addGameObject(gameObject, i, j)
    }
  }

  addGameObject(gameObject, i, j) {
    if (i && j) {
      gameObject.pos = {x: i, y: j}
    }
    this.gameObjects.push(gameObject)
  }

  getGrid() {
    let grid = new Array(this.kStr)
      .fill(null)
      .map(() => new Array(this.kColumn).fill(null))

    this.gameObjects.forEach(gameObject => {
      gameObject.body.forEach(cell => {
        grid[gameObject.pos.x + cell.pos.x][gameObject.pos.y + cell.pos.y] = cell
      })
    })

    return grid
  }

  randomFreeCell() {
    let grid = this.getGrid()

    let freeGrid = new Array()
    grid.forEach((str, i) => {
      str.forEach((cell, j) => {
        if (!cell) {
          freeGrid.push({x: i, y: j})
        }
      })
    })

    const result = freeGrid[~~(Math.random() * freeGrid.length)]

    /*delete freeGrid
    delete this.grid*/

    return result
  }

  randomWithFilter(comparator, count = 1) {
    const grid = this.getGrid()

    const freeGrid = new Array()
    grid.forEach((str, i) => {
      str.forEach((cell, j) => {
        if (comparator(cell)) {
          freeGrid.push({x: i, y: j})
        }
      })
    })

    const result = new Array()
    for (let i = 0; i < count; i++) {
      const ind = ~~(Math.random() * freeGrid.length)
      result.push(freeGrid[ind])
      freeGrid.splice(ind, 1)
    }
    return result
  }

  isFree(pos, delta = {x: 0, y: 0}) {
    const grid = this.getGrid()
    return grid[pos.x + delta.x][pos.y + delta.y]
  }
}
