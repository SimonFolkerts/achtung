export default function DrawEntity(entity, ctx) {
    ctx.save();
    ctx.translate(entity.position.x, entity.position.y);
    ctx.rotate(entity.angle);
    ctx.fillRect(-entity.width / 2, -entity.height / 2, entity.width, entity.height);
    ctx.restore();
}