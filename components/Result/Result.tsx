import React from "react";
import { Container } from "./style-components";
import { Props } from "./types";

export const Result = ({ result }: Props) => {
  return <Container result={result}>Result: {result}</Container>;
};
