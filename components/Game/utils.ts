import { shuffle, isEqual } from "lodash";
import { RollSideType } from "../../lib/types/ball";
import { ResultType } from "../Result/types";

export const NUMBER_OF_SHUFFLES = 5;
export const shellIDs = [1, 2, 3];

export const getShuffleMatrix = () =>
  Array.from({ length: NUMBER_OF_SHUFFLES }, () => shellIDs).map(
    (value, index, array) => {
      const previousCards = array[index - 1];
      let shuffledCards = shuffle(previousCards);

      while (isEqual(previousCards, shuffledCards)) {
        shuffledCards = shuffle(previousCards);
      }

      return index === 0 ? shuffle(value) : shuffledCards;
    }
  );

export const getWinner = (initPos: number, matrix: number[][]) =>
  matrix.reduceRight((acc, val) => val[acc - 1], initPos);

export function getRandomBox() {
  return Math.floor(Math.random() * 3) + 1;
}

export function getRollSide(boxPosition: number): RollSideType {
  if (boxPosition === 0) {
    return "none";
  } else if (boxPosition === 1) {
    return "left";
  } else if (boxPosition === 2) {
    return "center";
  } else if (boxPosition === 3) {
    return "right";
  }
}

export const getResult = (userChoice: number, winner: number): ResultType => {
  if (userChoice === 0) {
    return "N/A";
  } else {
    if (winner === userChoice) {
      return "winner";
    } else {
      return "loser";
    }
  }
};
