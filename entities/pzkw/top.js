import CursorTracker from "../../controllers/CursorTracker.js";
import PzkwProj from "../../entities/pzkw/proj.js";
export default class PzkwTop {
  constructor(sim, base, x, y) {
    sim.entities.push(this);
    this.base = base;
    this.sim = sim;
    this.width = 30;
    this.height = 40;

    this.angle = 0.5;
    this.angVel = 0.03;

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

    // bearing from entity to cursor
    let cursorAngle = Math.atan2(
      this.mousePosition.x - this.base.position.x,
      this.position.y - this.mousePosition.y
    );
    // set range from [-PI -> PI] to [0 -> 2*PI]
    if (cursorAngle < 0) {
      cursorAngle = 2 * Math.PI + cursorAngle;
    }

    // difference between angle to cursor and entity angle
    let offsetAngle = cursorAngle - this.angle;

    // set range to -PI -> PI
    if (offsetAngle >= Math.PI) {
      offsetAngle = offsetAngle - 2 * Math.PI;
    } else if (offsetAngle <= -Math.PI) {
      offsetAngle = offsetAngle + 2 * Math.PI;
    }

    // if entity is off angle by more than the delta angle per tick, track towards the target angle steadily, otherwise if within one ticks roatation, track directly
    if (offsetAngle > this.angVel) {
      this.angle += this.angVel + this.base.turnRate;
    } else if (offsetAngle < -this.angVel) {
      this.angle -= this.angVel - this.base.turnRate;
    } else {
      this.angle = cursorAngle;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    // ctx.fillRect(-this.width / 2, -this.height, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-1.5, -this.height);
    ctx.lineTo(1.5, -this.height);
    ctx.lineTo(1.5, -15);
    ctx.lineTo(12, -10);
    ctx.lineTo(12, 20);
    ctx.lineTo(0, 22);
    ctx.lineTo(-12, 20);
    ctx.lineTo(-12, -10);
    ctx.lineTo(-1.5, -15);
    ctx.lineTo(-1.5, -this.height);
    ctx.lineTo(2, -this.height);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}
