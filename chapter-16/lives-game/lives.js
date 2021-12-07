lives = 3;
async function runGame(plans, Display) {
for (let level = 0; level < plans.length;) {
    let status = await runLevel(new Level(plans[level]),
                                Display);
    if (status == "won") level++;
    if (status == "lost") lives--;
    console.log(lives)
    if (lives === 0) {
    console.log("You lost!");
    lives = 3;
    await runLevel(new Level(plans[0]),
                                Display);
    }
}
console.log("You've won!");
}
runGame(GAME_LEVELS, DOMDisplay);