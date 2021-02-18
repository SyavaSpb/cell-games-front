//const blocksColor = ["Graphic/yellow_block.png", "Graphic/green_block.png", "Graphic/light_block.png", "Graphic/orange_block.png", "Graphic/brawn_block.png"];

Object.prototype.clone = function() {
  return  Object.fromEntries(Object.entries(this))
}

class Cell {
  constructor(pos, image) {
    this.pos = pos
    this.image = image || false
  }

  setImage(image) {
    if (!image) {
      this.image = new Image()
    }
    this.image = image
  }
}

export class GameObject {
  constructor (pos) {
    this.body = new Array()
    this.pos = pos
  }

  pushCell(pos, image) {
    this.body.push(new Cell(pos, image))
  }

  deleteCell(cell) {

  }

  isEmpty() {
    return this.body.length == 0
  }

  /*newCell(pos, image) {
    return new Cell(pos, image)
  }*/
}
