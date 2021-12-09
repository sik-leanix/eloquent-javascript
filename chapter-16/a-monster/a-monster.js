import { DOMDisplay, Vec, levelChars, runLevel, Level, State } from "../lib/game.js";

class Monster {
  constructor(pos) {
    this.pos = pos;
    this.speed = 3;
  }

  get type() { return "monster"; }

  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -1)));
  }

  update(time, state) {
    const player = state.player;
    const playerPosX = player.pos.x;
    let newMonsterPos;
    const monsterPos = this.pos;
    if (this.pos.x < playerPosX) {
      newMonsterPos = new Vec(monsterPos.x + (time * this.speed), monsterPos.y);
    } else {
      newMonsterPos = new Vec(monsterPos.x - (time * this.speed), monsterPos.y);
    }
    if (state.level.touches(newMonsterPos, this.size, "wall")) {
      return new Monster(new Vec(this.pos.x, this.pos.y));
    } else {
      return new Monster(newMonsterPos)
    }
  }

  collide(state) {
    const player = state.player;
    const playerPosY = Math.floor(player.pos.y);
    if (Math.floor(this.pos.y) - playerPosY === 2) {
      const status = state.status;
      const actorsWithoutMonster = state.actors.filter(a => a != this);
      return new State(state.level, actorsWithoutMonster, status);
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