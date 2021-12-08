import { GAME_LEVELS } from "../lib/levels.js";
import { DOMDisplay, runAnimation, runGame, State, trackKeys } from "../lib/game.js";

function runLevelWithPauseSupport(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise(resolve => {
    const isGamePaused = () => state.status === "paused";
    const waitForResume = () => {
      if (isGamePaused()) {
        setTimeout(waitForResume, 100);
      } else {
        runAnimation(animate);
      }
    }
    const pauseOrResumeGame = (event) => {
      if (event.key === "Escape") {
        if (state.status === "paused") {
          state.status = "playing";
        } else {
          state.status = "paused";
        }
      } 
    }

    const animate = (time => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      
      if (isGamePaused()) {
        waitForResume();
        return false; // Returning false will stop the animation
      } else if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        window.removeEventListener("keydown", pauseOrResumeGame);
        resolve(state.status);
        return false;
      }
    });

    document.addEventListener("keydown", pauseOrResumeGame);
    let arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"])
    runAnimation(animate);
  });
}

runGame(GAME_LEVELS, DOMDisplay, runLevelWithPauseSupport);