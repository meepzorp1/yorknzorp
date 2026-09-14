import * as utils from "../dat/util.js";
import state from "../dat/state.js";

export function init() {
  const goals = utils.createEl("div", "component__goals");
  document.getElementById("container-main").append(goals);

  goals.classList.add("component__goals");
  goals.textContent = "Goals Component";
}
