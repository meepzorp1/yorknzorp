import state from "../dat/state.js";
import SCENES from "../dat/scenes.js ";
import * as utils from "../dat/util.js";

const story = document.getElementById("container-main");

export function build() {
  console.log(story);
  const page = utils.createEl("div", "pages-story");
  story.append(page);
}

export function load() {
  console.log('hi')
  const cont = document.getElementById("pages-story");
  if (!cont) build();
  console.log("got here");
  const scene = SCENES[state.scene];

  scene.dialogue.forEach((dialogue, n) => {
    console.log('im in')
    const full = utils.createEl("div", `${"line-" + n}`);
    const speaker = utils.createEl(
      "div",
      `${"speaker-" + n}`,
      dialogue.speaker,
    );
    const line = utils.createEl("div", `${"text-" + n}`, dialogue.text);
    full.classList.add('dialogue__line')
    cont.append(full);

    full.append(speaker);
    full.append(line);
  });

}
