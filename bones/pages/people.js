import state from "../dat/state.js";
import * as utils from "../dat/util.js";

const people = document.getElementById("container-main");

export function build() {
  const page = utils.createEl("div", "pages-people");
  people.append(page);
}

export function load() {
  const cont = document.getElementById("pages-people");
  if (!cont) build();

  state.people.forEach((character) => {
    const card = utils.createEl("div", `${'people__' + character.name}`, `${character.name}`);
    cont.append(card)
  })
}
