console.log("started");
import InputHandler from "./controllers/InputHandler.js";
import Base from "./entities/pzkw/base.js";
export default class Sim {
  constructor(board) {
    this.board = board;
    this.width = board.width;
    this.height = board.height;
    this.entities = [];
  }
  start() {
    const base = new Base(this, { x: 400, y: 300 });
    const inputHandler = new InputHandler(base);
  }

  update() {
    this.entities = this.entities.filter((entity) => {
      return !entity.deleteMe;
    });
    for (const entity of this.entities) {
      entity.update();
    }
  }

  draw(ctx) {
    for (const entity of this.entities) {
      entity.draw(ctx);
    }
  }
}
