export class inputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "Enter" || 
          e.key === " ") &&
        !this.keys.includes(e.key)
      ) {
        this.keys.push(e.key);
      } else if (e.key === 'd') {
        this.game.debug = !this.game.debug;
        console.log('debug mode is', this.game.debug ? 'on' : 'off');
      }
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Enter"|| 
        e.key === " "
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
