import styled, { css } from "styled-components";

export const Container = styled.div<{ isShuffling: boolean }>`
  margin: 20px;
  display: flex;
  justify-content: center;
  ${({ isShuffling }) =>
    isShuffling
      ? css`
          pointer-events: none;
        `
      : ""}
`;

export const Board = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 200px 1fr 1fr 1fr;
  grid-template-areas:
    "controls . ball ."
    "controls shell-1 shell-2 shell-3";
  gap: 20px;
  min-width: 800px;
  background-color: cornflowerblue;
  border: 20px solid black;
`;
