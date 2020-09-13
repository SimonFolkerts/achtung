console.log("started");
import InputHandler from "./controllers/InputHandler.js";
import Base from "./entities/pzkw/base.js";
export default class Sim {
  constructor(board) {
    this.board = board;
    this.width = board.width;
    this.height = board.height;
    this.entities = [];
    this.effects = [];
  }
  start() {
    const base = new Base(this, { x: 400, y: 300 });
    const inputHandler = new InputHandler(base);
  }

  update() {
    this.effects = this.effects.filter((effect) => {
      return !effect.deleteMe;
    });
    this.entities = this.entities.filter((entity) => {
      return !entity.deleteMe;
    });
    for (let array of [this.entities, this.effects]) {
      for (const entity of array) {
        entity.update();
      }
    }
  }

  draw(ctx) {
    for (const array of [this.effects, this.entities]) {
      for (const entity of array) {
        entity.draw(ctx);
      }
    }
  }
}
