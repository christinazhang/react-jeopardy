import { LOCAL, YOUTUBE, GOOGLE_DRIVE } from "./mediaTypes";

export const contestants = [
  { name: "Contestant 1", imgLink: "https://www.w3schools.com/css/paris.jpg" },
  { name: "Contestant 2", imgLink: "https://via.placeholder.com/150" },
  { name: "Contestant 3", imgLink: "https://via.placeholder.com/150" },
  { name: "Contestant 4", imgLink: "https://via.placeholder.com/150" },
  { name: "Contestant 5", imgLink: "https://via.placeholder.com/150" },
  { name: "Contestant 6", imgLink: "https://via.placeholder.com/150" },
  { name: "Contestant 7", imgLink: "https://via.placeholder.com/150" },
  { name: "Contestant 8", imgLink: "https://via.placeholder.com/150" },
];

export const categories = [
  {
    title: "Category 1",
    clues: [
      {
        text: "This is a test clue",
      },
      {
        text: "This is also a test clue",
        video: {
          type: YOUTUBE,
          src: "https://www.youtube.com/watch?v=kRXmAIHYQR4",
        },
      },
      {
        text: "Test",
        audio: {
          type: GOOGLE_DRIVE,
          src:
            "https://drive.google.com/file/d/1RrFXc0OHSQ2V7VtOtXww2urmT3Xzv5ke/view?usp=sharing",
        },
      },
      {
        text:
          "very very very very very very very very very very long test clue",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 2",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 3",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 4",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 5",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
];

export const categories2 = [
  {
    title: "Category 1",
    clues: [
      {
        text: "This is a test clue",
      },
      {
        text: "This is also a test clue",
        video: {
          type: YOUTUBE,
          src: "https://www.youtube.com/watch?v=kRXmAIHYQR4",
        },
      },
      {
        text: "Test",
        audio: {
          type: GOOGLE_DRIVE,
          src:
            "https://drive.google.com/file/d/1RrFXc0OHSQ2V7VtOtXww2urmT3Xzv5ke/view?usp=sharing",
        },
      },
      {
        text:
          "very very very very very very very very very very long test clue",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 2",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 3",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 4",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
  {
    title: "Category 5",
    clues: [
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
      {
        text: "Test",
      },
    ],
  },
];
