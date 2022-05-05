import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Ball } from "../Ball/Ball";

export const goLateral = (steps: number) => keyframes`
    from {
        left: 0;
    }
    to {
        left: ${steps * 200}px;
    }
`;

export const goVertical = (steps: number) => keyframes`
    from {
        top: 0;
    }
    40% {
        top: ${steps * 200}px;
    }
    60% {
        top: ${steps * 200}px;
    }
    to {
        top: 0;
    }
`;

const animationTiming = 700;

export const Container = styled.div<{
  isGameRunning: boolean;
  isShuffling: boolean;
  shuffleTo: number;
  shellId: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  height: 200px;
  ${({ shellId }) => css`
    grid-area: shell-${shellId};
  `}
  ${({ isGameRunning }) =>
    isGameRunning
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;
        `}
  ${({ isShuffling, shuffleTo, shellId }) =>
    isShuffling
      ? css`
          animation-duration: ${animationTiming}ms;
          animation-name: ${goLateral(shuffleTo - shellId)};
          animation-timing-function: ease-in;
          animation-fill-mode: initial;
          animation-iteration-count: infinite;
        `
      : null}
`;

export const Content = styled.div<{
  isGameRunning: boolean;
  isShuffling: boolean;
  showContent: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  border: 2px solid black;
  transition: background-color 200ms;
  ${({ isGameRunning, showContent }) =>
    !isGameRunning &&
    !showContent &&
    css`
      :hover {
        background-color: darkgray;
      }
    `}
  ${({ showContent }) =>
    showContent &&
    css`
      background-color: transparent;
    `}
  ${({ isShuffling }) =>
    isShuffling
      ? css`
          animation-duration: ${animationTiming}ms;
          animation-name: ${goVertical(Math.random() - 0.5)};
          animation-timing-function: ease-in;
          animation-fill-mode: initial;
          animation-iteration-count: infinite;
        `
      : null}
`;

export const ResultBall = styled(Ball)<{
  isGameRunning: boolean;
  isWinner: boolean;
}>`
  position: absolute;
  ${({ isGameRunning, isWinner }) =>
    isGameRunning || !isWinner
      ? css`
          opacity: 0;
        `
      : null}
`;
