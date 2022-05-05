import styled, { keyframes, css } from "styled-components";
import { RollSideType } from "../../lib/types/ball";

export const rollAnimation = (side: RollSideType) => {
  if (side === "center") {
    return keyframes`
        0% {
            top: 0;
        }
        99%{
                opacity: 1;
            }
        100% {
            opacity: 0;
            top: 200px;
        }
        `;
  } else {
    const offset = side === "left" ? -200 : 200;
    return keyframes`
            from {
                opacity: 1;
                top: 0;
                left: 0;
            }
            50% {
                top: 10px;
                left: ${offset}px;
            }
            99%{
                opacity: 1;
            }
            to {
                opacity: 0;
                top: 200px;
                left: ${offset}px;
            }
        `;
  }
};

export const Container = styled.div<{ rollSide: RollSideType }>`
  justify-self: center;
  position: relative;
  clip-path: circle(50%);
  background-color: red;
  height: 150px;
  width: 150px;
  grid-area: ball;
  ${({ rollSide }) =>
    rollSide !== "none"
      ? css`
          animation-duration: 1s;
          animation-name: ${rollAnimation(rollSide)};
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        `
      : null}
  img {
    opacity: 0.1;
  }
`;
