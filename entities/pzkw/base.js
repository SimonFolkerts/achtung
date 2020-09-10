import PzkwTop from "../pzkw/top.js";
export default class PzkwBase {
  constructor(sim, position) {
    sim.entities.push(this);
    this.width = 60;
    this.height = 100;

    this.angle = 0;
    this.angVel = 0.05;

    this.vel = 3;
    this.dx;
    this.dy;

    this.position = position;
    this.keys = {
      left: false,
      right: false,
      up: false,
      down: false,
    };
    new PzkwTop(sim, this, this.position.x, this.position.y);
  }

  update() {
    // rotation
    if (this.keys.left) {
      this.angle -= this.angVel;
    } else if (this.keys.right) {
      this.angle += this.angVel;
    }
    if (this.keys.up) {
      // something about vectors I dunno I failed math lmao
      // displacement ratios from unit circle

      this.dx = Math.cos(this.angle - Math.PI / 2) * this.vel;
      this.dy = Math.sin(this.angle - Math.PI / 2) * this.vel;
      // displacement magnitudes
      this.position.x += this.dx;
      this.position.y += this.dy;

    }
    if (this.keys.down) {
      this.dx = Math.cos(this.angle - Math.PI / 2) * this.vel;
      this.dy = Math.sin(this.angle - Math.PI / 2) * this.vel;
      this.position.x -= this.dx;
      this.position.y -= this.dy;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    // ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-this.width / 2, -this.height / 2 + 10);
    ctx.lineTo(0, -this.height / 2);
    ctx.lineTo(this.width / 2, -this.height / 2 + 10);
    ctx.lineTo(this.width / 2, this.height / 2);
    ctx.lineTo(-this.width / 2, this.height / 2);
    ctx.lineTo(-this.width / 2, -this.height / 2 + 10);
    ctx.lineTo(0, -this.height / 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}
