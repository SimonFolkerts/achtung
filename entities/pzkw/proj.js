export default class PzkwProj {
  constructor(sim, x, y, angle) {
    sim.entities.unshift(this);
    this.width = 5;
    this.height = 50;

    this.angle = angle;
    this.vel = 80;
    this.position = { x: x, y: y };
    this.origin = { x: x + Math.cos(this.angle - Math.PI / 2) * 35, y: y + Math.sin(this.angle - Math.PI / 2) * 35 };
    this.lifespan = 25;
    this.age = 0;
    this.deleteMe = false;
  }

  update() {
    if (this.age > this.lifespan) {
      this.deleteMe = true;
    }
    this.dx = Math.cos(this.angle - Math.PI / 2) * this.vel;
    this.dy = Math.sin(this.angle - Math.PI / 2) * this.vel;
    this.position.x += this.dx;
    this.position.y += this.dy;
    this.age++
  }

  draw(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);

    ctx.lineTo(-3, -this.height + 3);
    ctx.lineTo(0, -this.height);
    ctx.lineTo(3, -this.height + 3);

    ctx.restore();
    ctx.save();
    ctx.lineTo(this.origin.x, this.origin.y);

    ctx.strokeStyle = `rgba(0,0,0,${(this.lifespan - this.age)/this.lifespan}`
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }
}
