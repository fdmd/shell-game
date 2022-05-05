import styled, { css } from "styled-components";
import { ResultType } from "./types";

export const Container = styled.div<{ result: ResultType }>`
  padding: 10px;
  border-radius: 5px;
  ${({ result }) => {
    if (result === "winner") {
      return css`
        background-color: darkgreen;
        color: white;
      `;
    } else if (result === "loser") {
      return css`
        background-color: darkred;
        color: white;
      `;
    } else {
      return css`
        background-color: transparent;
      `;
    }
  }}
`;
