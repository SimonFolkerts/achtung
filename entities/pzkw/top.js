import CursorTracker from "../../controllers/CursorTracker.js";
import PzkwProj from "../../entities/pzkw/proj.js";
export default class PzkwTop {
  constructor(sim, base, x, y) {
    sim.entities.push(this);
    this.base = base;
    this.sim = sim;
    this.width = 60;
    this.height = 80;

    this.angle = 0;
    this.angVel = 0.05;

    this.mousePosition = { x: 0, y: 0 };

    this.position = base.position;

    this.cursorTracker = new CursorTracker();
    document.addEventListener("mousemove", (evt) => {
      this.mousePosition = this.cursorTracker.getMousePos(evt);
    });

    document.addEventListener("click", () => {
      this.fire(this.sim);
    });
  }

  fire(sim) {
    new PzkwProj(sim, this.position.x, this.position.y, this.angle);
  }

  update() {
    // rotation
    this.angle = Math.atan2(
      this.mousePosition.x - this.base.position.x,
      this.position.y - this.mousePosition.y
    );
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    // ctx.fillRect(-this.width / 2, -this.height, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-2, -this.height);
    ctx.lineTo(2, -this.height);
    ctx.lineTo(2, -30);
    ctx.lineTo(25, -15);
    ctx.lineTo(25, 35);
    ctx.lineTo(0, 38);
    ctx.lineTo(-25, 35);
    ctx.lineTo(-25, -15);
    ctx.lineTo(-2, -30);
    ctx.lineTo(-2, -this.height);
    ctx.lineTo(2, -this.height);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}
