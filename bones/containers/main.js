import * as story from "../pages/story.js";
import * as vars from "../dat/var.js";
import state from "../dat/state.js";
import * as goalsComponent from "../components/goals.js";

const main = document.getElementById("container-main");
let currentPage = null;

function initComponents() {
  story.load();
  goalsComponent.init();
}

export function init() {
  buildContainers();
  initComponents();
}

// function loadPage(page: () => void): void
export function loadPage(page) {

  if (page !== null && page !== undefined) {
    currentPage = vars.PAGES[page].name;
  }

  state.pages[currentPage].load();
}

export function render(link) {
  const page = document.getElementById(`pages-${link.name}`);
  if (page) {
    main.querySelectorAll("div[id^='pages-']").forEach((p) => (p.style.display = "none"));
    page.style.display = "block";
  }
}

function buildContainers() {
  vars.PAGES.forEach((link) => {
    const page = document.createElement("div");

    page.id = `pages-${link.name}`;

    link.load = () => render(link);

    main.append(page);
  });

}
