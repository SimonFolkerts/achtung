import PzkwTop from "../pzkw/top.js";
export default class PzkwBase {
  constructor(sim, position) {
    sim.entities.push(this);
    this.width = 30;
    this.height = 50;

    this.angle = 0;
    this.angVel = 0.025;

    this.speed = 0;
    this.vel = 3;
    this.accel = 0;
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
    let left = 0;
    let right = 0;
    if (this.keys.left) {
      left = -this.angVel;
    }
    if (this.keys.right) {
      right = this.angVel;
    }
    this.turnRate = left + right;
    this.angle = this.angle += this.turnRate;
    if (this.angle >= 2 * Math.PI) {
      this.angle = 0;
    }

    this.accel = 0;
    this.drive = 0;
    if (this.keys.up) {
      this.drive = 1;
      this.accel = 0.15;
    }

    if (this.keys.down) {
      this.drive = 1;
      this.accel = -0.15;
    }

    this.speed += this.accel;

    this.dx = Math.cos(this.angle - Math.PI / 2) * this.speed;
    this.dy = Math.sin(this.angle - Math.PI / 2) * this.speed;
    // displacement magnitudes
    this.position.x += this.dx;
    this.position.y += this.dy;

    this.speed *= 0.95;
    if (Math.abs(this.speed) < 0.1 && !this.drive) {
      this.speed = 0;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    // ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-this.width / 2, -this.height / 2 + 5);
    ctx.lineTo(0, -this.height / 2);
    ctx.lineTo(this.width / 2, -this.height / 2 + 5);
    ctx.lineTo(this.width / 2, this.height / 2);
    ctx.lineTo(-this.width / 2, this.height / 2);
    ctx.lineTo(-this.width / 2, -this.height / 2 + 5);
    ctx.lineTo(0, -this.height / 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}
