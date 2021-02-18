export class Graphic {
  constructor(canvas, fps = 60) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.fps = fps
    this.boards = new Array()
    this.gameObjects = new Array()
  }

  addBoard(board) {
    this.boards.push(board)
  }

  addGameObject() {
    this.gameObjects.push(gameObject)
  }

  setfps(fps) {

  }

  draw() {
    this.drawing = setInterval(() => {
      this.ws = {
        w: document.getElementsByClassName("board")[0].clientWidth - 3,
        h: document.getElementsByClassName("board")[0].clientHeight - 10,
        //w: document.getElementById("game").clientWidth,
        //h: document.getElementById("game").clientHeight,
        del: 16
      }
      this.canvas.width = this.ws.w
      this.canvas.height = this.ws.h

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.boards.forEach(board => this.drawBoard(board))
      this.gameObjects.forEach(gameObject => this.drawGameObject(gameObject))
    }, 1 / this.fps)
  }

  drawBoard(board) {
    board.gameObjects.forEach(gameObject => this.drawGameObject(gameObject))
  }

  drawGameObject(gameObject) {
    gameObject.body.forEach(cell => {
      let x = this.ws.w/this.ws.del * (gameObject.pos.y + cell.pos.y)
      let y = this.ws.w/this.ws.del * (gameObject.pos.x + cell.pos.x)
      this.ctx.drawImage(cell.image, x, y, this.ws.w/this.ws.del, this.ws.w/this.ws.del)
    })
  }
}
