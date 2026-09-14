import * as main from "./bones/containers/main.js";
import * as left from "./bones/containers/left-bar.js";

window.onload = () => {
  main.init();
  left.init();

  left.load();
  main.loadPage(0);
};

let lastTime;

function animate(time) {
  if (lastTime === undefined) {
    lastTime = time;
  }

  const dt = (time - lastTime) / 1000;
  lastTime = time;

  //   update(dt);
  //   render();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
