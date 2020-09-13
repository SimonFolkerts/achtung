export default class Tread {
  constructor(sim, x, y, angle) {
    sim.effects.push(this);
    this.position = { x: x, y: y };
    this.angle = angle;

    this.lifespan = 500;
    this.age = 0;
  }

  update() {
    if (this.age < this.lifespan) {
      this.age++;
    } else {
      this.deleteMe = true;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.fillStyle = `rgba(0,0,0,${
      (this.lifespan - this.age) / this.lifespan / 3
    })`;
    ctx.fillRect(5, 0, 10, 2);
    ctx.fillRect(-5, 0, -10, 2);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();
  }
}
