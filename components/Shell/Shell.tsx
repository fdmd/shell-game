import { noop } from "lodash";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { Container, Content, ResultBall } from "./styled-components";
import { Props } from "./types";

export const Shell = ({
  id,
  isShuffling,
  shuffleTo,
  onIteration,
  onClick,
  isGameRunning,
  showContent,
  isWinner,
}: Props) => {
  const ref: MutableRefObject<HTMLDivElement> = useRef();

  useEffect(() => {
    ref.current?.addEventListener("click", onClick);
    ref.current?.addEventListener("animationiteration", onIteration);

    return () => {
      ref.current?.addEventListener("click", onClick);
      ref.current?.removeEventListener("animationiteration", onIteration);
    };
  }, [ref, onClick, onIteration]);

  return (
    <Container
      shellId={id}
      isGameRunning={isGameRunning}
      ref={ref}
      isShuffling={isShuffling}
      shuffleTo={shuffleTo}
    >
      <ResultBall
        isGameRunning={isGameRunning}
        isWinner={isWinner}
        initShuffle={noop}
        rollSide="none"
      />
      <Content
        isShuffling={isShuffling}
        isGameRunning={isGameRunning}
        showContent={showContent}
      />
    </Container>
  );
};
