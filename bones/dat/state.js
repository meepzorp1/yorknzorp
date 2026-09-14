import * as story from "../pages/story.js";
import * as packages from "../pages/packages.js";
import * as people from "../pages/people.js";

const characters = [
  {
    name: "Jack",
  },
  {
    name: "Ben",
  },
  {
    name: "Maya",
  },
];

const state = {
  pages: { story, packages, people },
  page: story,
  scene: 0,

  people: characters,

  milestones: {
    ViewPeoplePage: false,
  },
};

export const init = () => {};

export default state;
