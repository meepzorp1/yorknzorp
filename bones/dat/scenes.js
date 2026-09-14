import * as state from "./state.js"

export const SCENES = [{
  id: 0,
  title: "An Idea",

  dialogue: [
    {
      speaker: "BEN",
      text: "Okay. Hear me out before you tell me this is stupid."
    },
    {
      speaker: "MAYA",
      text: "That's usually how stupid ideas start."
    },
    {
      speaker: "BEN",
      text: "There's a spot offshore I've been looking at. Shallow water. Far enough out that nobody really pays attention to it."
    },
    {
      speaker: "JACK",
      text: "You have been looking at a random patch of ocean?"
    },
    {
      speaker: "BEN",
      text: "I've been looking at what we could put there."
    },
    {
      speaker: "MAYA",
      text: "Which is?"
    },
    {
      speaker: "BEN",
      text: "Land."
    },
    {
      speaker: "JACK",
      text: "There is already land. We're standing on it."
    },
    {
      speaker: "BEN",
      text: "Our land."
    },
    {
      speaker: "MAYA",
      text: "Oh no."
    },
    {
      speaker: "BEN",
      text: "Start small. Build something stable. A platform, fill, whatever works. Then expand it."
    },
    {
      speaker: "JACK",
      text: "You're describing an island."
    },
    {
      speaker: "BEN",
      text: "Exactly."
    },
    {
      speaker: "MAYA",
      text: "And you brought us here because..."
    },
    {
      speaker: "BEN",
      text: "Because I can't do it alone."
    },
    {
      speaker: "JACK",
      text: "There it is."
    },
    {
      speaker: "BEN",
      text: "I've got some money. Jack has the boat. Maya actually knows how the ocean works."
    },
    {
      speaker: "MAYA",
      text: "That's an aggressively generous description of my qualifications."
    },
    {
      speaker: "BEN",
      text: "So?"
    },
    {
      speaker: "JACK",
      text: "So we're apparently building an island."
    }
  ],
  requirements: [
    {
      ViewPeoplePage: () => state.milestones.ViewPeoplePage,
    },
  ]
}];

export default SCENES;