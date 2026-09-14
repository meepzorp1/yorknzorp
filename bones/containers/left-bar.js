import * as vars from "../dat/var.js";
import { loadPage } from "./main.js";

export function init() {
  const left = document.getElementById("container-left");

  const el = document.createElement("div");
  el.classList.add("side-bar");
  el.id = "side-bar";

  left.append(el);
}

export function load() {
  const sideBar = document.getElementById("side-bar");
  const nav = document.createElement("div");

  vars.PAGES.forEach((link) => {
    const addLink = document.createElement("div");
    addLink.textContent = link.linkName;
    addLink.onclick = () => loadPage(link.id);
    sideBar.append(addLink);
  });
}
