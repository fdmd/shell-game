import React, { MutableRefObject, useEffect, useRef } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";
import Image from "next/image";
import ballGuy from "../../public/images/guy.png";

export const Ball = ({ initShuffle, rollSide, className }: Props) => {
  const ballRef: MutableRefObject<HTMLDivElement> = useRef();

  useEffect(() => {
    ballRef.current?.addEventListener("animationend", initShuffle);

    return () => {
      ballRef.current?.removeEventListener("animationend", initShuffle);
    };
  }, [ballRef]);

  return (
    <Container className={className} ref={ballRef} rollSide={rollSide}>
      <Image src={ballGuy} alt="courtroom" layout="fill" />
    </Container>
  );
};
