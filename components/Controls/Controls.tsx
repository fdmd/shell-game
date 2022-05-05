import React from "react";
import { Result } from "../Result/Result";
import { Button, Container } from "./styled-components";
import { Props } from "./types";

export const Controls = ({
  onClickStartReset,
  ballPosition,
  result,
}: Props) => {
  return (
    <Container>
      Controls
      <Button onClick={onClickStartReset}>
        {ballPosition ? "Reset" : "Start Game"}
      </Button>
      <Result result={result} />
    </Container>
  );
};
