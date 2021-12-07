function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  let pause = "running";
      return new Promise(resolve => {
    runAnimation(time => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      function pauseFun (event) {
        if (event.key === "Escape") {
          if (pause === "running") {
            //console.log('The game is running!')
            return pause = "paused"
          } else {
            //console.log("The game is paused!");
            return pause = "afterPause"
          }
        } 
      }
      window.addEventListener("keydown", pauseFun);
      
      console.log(pause)
      if (pause === "paused") {
        return false
      } else if (pause === "afterPause") {
        runAnimation(frame);
        pause = "running"
        return true
      }
      

      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}