export default class CursorTracker {
  getMousePos(evt) {
    const rect = evt.target.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }
}
