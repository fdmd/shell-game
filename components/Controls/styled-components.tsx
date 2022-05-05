import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  grid-area: controls;
  border-radius: 5px;
  border: 2px solid black;
`;

export const Button = styled.button`
  cursor: pointer;
`;
