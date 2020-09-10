export default class PzkwProj {
  constructor(sim, x, y, angle) {
    sim.entities.push(this);
    this.width = 5;
    this.height = 50;

    this.angle = angle;
    this.vel = 5;
    this.position = { x: x, y: y };
    this.origin = { x: x, y: y };
  }

  update() {
    this.dx = Math.cos(this.angle - Math.PI / 2) * this.vel;
    this.dy = Math.sin(this.angle - Math.PI / 2) * this.vel;
    this.position.x += this.dx;
    this.position.y += this.dy;
  }

  draw(ctx) {
    ctx.save();

    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);

    ctx.lineTo(-2, -this.height + 3);
    ctx.lineTo(0, -this.height);
    ctx.lineTo(2, -this.height + 3);

    ctx.restore();

    ctx.lineTo(this.origin.x, this.origin.y);
    ctx.stroke();
  }
}
