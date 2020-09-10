export default class InputHandler {
  constructor(entity) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          entity.keys.left = true
          break;
        case 39:
          entity.keys.right = true
          break;
        case 38:
          entity.keys.up = true
          break;
        case 40:
          entity.keys.down = true
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
            entity.keys.left = !true
            break;
          case 39:
            entity.keys.right = !true
            break;
          case 38:
            entity.keys.up = !true
            break;
          case 40:
            entity.keys.down = !true
            break;
      }
    });
  }
  // 37, 39, 38, 40

  // keyup
}
