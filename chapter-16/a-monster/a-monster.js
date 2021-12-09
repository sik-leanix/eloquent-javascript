import { DOMDisplay, Vec, levelChars, runLevel, Level, State } from "../lib/game.js";

class Monster {
    constructor(pos) {
        this.pos = pos;
    }

    get type() { return "monster"; }

    static create(pos) {
      return new Monster(pos.plus(new Vec(0, -1)));
    }

    update(time, state) {
        const player = state.player;
      const playerPosX = player.pos.x;
      let newPos;
      let speed = 0.05;
      if (this.pos.x < playerPosX) {
          newPos = new Vec(this.pos.x + speed, this.pos.y);
      } else {
          newPos = new Vec(this.pos.x - speed, this.pos.y);
      }
      if (state.level.touches(newPos, this.size, "wall")) {
          return new Monster(new Vec(this.pos.x, this.pos.y));
      } else {
          return new Monster(newPos)
      }
      
    }

    collide(state) {
      const player = state.player;
      const playerPosY = Math.floor(player.pos.y);
      if (Math.floor(this.pos.y) - playerPosY === 2) {
        let status = state.status;
        let filtered = state.actors.filter(a => a != this);
        if (!filtered.some(a => a.type == "coin")) status = "won";
        return new State(state.level, filtered, status);
        
      } else {
        return new State(state.level, state.actors, "lost");
        }
      }
  } 

  Monster.prototype.size = new Vec(1.2, 2);

  levelChars["M"] = Monster;

  runLevel(new Level(`
..................................
.################################.
.#..............................#.
.#..............................#.
.#..............................#.
.#...........................o..#.
.#..@...........................#.
.##########..............########.
..........#..o..o..o..o..#........
..........#...........M..#........
..........################........
..................................
`), DOMDisplay);