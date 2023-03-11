import { useState } from "react";
import random from "./random";

const main = [
  "#f5f6fa",
  "#eaebf4",
  "#d0d4e7",
  "#a6b0d3",
  "#7686ba",
  "#6374ae",
  "#414f88",
  "#36406e",
  "#30395c",
  "#2c324e",
];
const sec = [
  "#faf7f2",
  "#f4ede0",
  "#e7d8c1",
  "#d8be99",
  "#c69c6d",
  "#bb8654",
  "#ae7348",
  "#915d3d",
  "#754b37",
  "#5f3f2f",
];
const neu = [
  "#f8f8f8",
  "#f0f0f0",
  "#e6e6e6",
  "#d1d1d1",
  "#b4b4b4",
  "#9a9a9a",
  "#818181",
  "#6a6a6a",
  "#5a5a5a",
  "#4e4e4e",
];

export const allcolors = [
  {
    main,
    sec,
  },
  {
    main: [
      "#f2f9f9",
      "#ddeff0",
      "#bfe0e2",
      "#92cace",
      "#5faab1",
      "#438e96",
      "#3b757f",
      "#356169",
      "#325158",
      "#2d464c",
    ],
    sec: ["#fcf5f4", "#fae8e6", "#f6d5d2", "#efb7b2", "#e48d85", "#d6675d", "#c4544a", "#a23c33", "#86352e", "#70322c"],
  },
  {
    sec: ["#fff4e1", "#ffe9bf", "#ffd987", "#ffcb42", "#ffc40a", "#f8d500", "#c7b100", "#968500", "#756600", "#665b05"],
    main: [
      "#f3f1ff",
      "#eae5ff",
      "#d7ceff",
      "#bba7ff",
      "#9a75ff",
      "#7c3eff",
      "#7017ff",
      "#6003fb",
      "#5104d3",
      "#4505ad",
    ],
  },
];
export const useColors = (mode) => {
  const [index, setIndex] = useState(0);
  console.log("index :>> ", index);
  return [
    {
      main: allcolors[index].main,
      sec: allcolors[index].sec,
      neu,
    },
    () => {
      setIndex(random(0, allcolors.length - 1));
    },
  ];
};
