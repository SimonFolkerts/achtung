export default class PzkwProj {
  constructor(sim, x, y, angle) {
    sim.entities.push(this);
    this.width = 5;
    this.height = 50;

    this.angle = angle;
    this.vel = 50;
    this.position = {x: x, y: y};
  }

  update() {
    this.dx = Math.cos(this.angle - Math.PI / 2) * this.vel;
    this.dy = Math.sin(this.angle - Math.PI / 2) * this.vel;
    this.position.x += this.dx;
    this.position.y += this.dy;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    ctx.fillRect(-this.width / 2, -this.height, this.width, this.height);
    ctx.restore();
  }
}
