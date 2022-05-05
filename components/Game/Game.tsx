import { noop } from "lodash";
import { useState } from "react";
import { Ball } from "../Ball/Ball";
import { Controls } from "../Controls/Controls";
import { Shell } from "../Shell/Shell";
import { Board, Container } from "./styled-components";
import {
  getRandomBox,
  getResult,
  getRollSide,
  getShuffleMatrix,
  getWinner,
  NUMBER_OF_SHUFFLES,
  shellIDs,
} from "./utils";

const initMatrix = getShuffleMatrix();

export const Game = () => {
  const [ballPosition, setBallPosition] = useState(0);
  const [winner, setWinner] = useState(0);
  const [userChoice, setUserChoice] = useState(0);
  const [shufflesLeft, setShufflesLeft] = useState(0);
  const [shuffleMatrix, setShuffleMatrix] = useState(initMatrix);
  const [isGameRunning, setGameRunning] = useState(true);

  const onIteration = (e) => {
    if (e.target.childElementCount) {
      setShufflesLeft((count) => {
        if (count - 1 === 0) {
          setGameRunning(false);
        }
        return count - 1;
      });
    }
  };

  const onClickStartReset = () => {
    if (ballPosition) {
      setBallPosition(0);
      setShufflesLeft(0);
      setUserChoice(0);
      setShuffleMatrix(getShuffleMatrix());
      setGameRunning(true);
    } else {
      const randomBox = getRandomBox();
      setWinner(getWinner(randomBox, shuffleMatrix));
      setBallPosition(randomBox);
    }
  };

  const isShuffling = !!(ballPosition && shufflesLeft);

  return (
    <Container isShuffling={isShuffling}>
      <Board>
        <Controls
          ballPosition={ballPosition}
          onClickStartReset={onClickStartReset}
          result={getResult(userChoice, winner)}
        />
        <Ball
          initShuffle={(e) => {
            setShufflesLeft(NUMBER_OF_SHUFFLES);
          }}
          rollSide={getRollSide(ballPosition)}
        />
        {shellIDs.map((id, index) => (
          <Shell
            id={id}
            key={id}
            isGameRunning={isGameRunning}
            isShuffling={isShuffling}
            shuffleTo={
              isShuffling
                ? shuffleMatrix[shufflesLeft - 1][index]
                : shuffleMatrix[shuffleMatrix.length - 1][index]
            }
            onIteration={index === 0 ? onIteration : noop}
            showContent={!isGameRunning && userChoice === id}
            isWinner={winner === id}
            onClick={(e) => {
              if (!isShuffling) {
                setUserChoice(id);
              }
            }}
          />
        ))}
      </Board>
    </Container>
  );
};
