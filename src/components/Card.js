import styled from "styled-components";
import { darken } from "polished";

const colors = {
  green: "#079992",
  red: "#b71540",
  blue: "#1e3799"
};

const Card = styled.div`
  background: ${({ colorIndex }) =>
    colorIndex === 0
      ? colors.green
      : colorIndex === 1 ? colors.red : colors.blue};
  color: #fff;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100px;
  font-weight: 600;

  &:hover {
    background: ${({ colorIndex }) =>
      darken(
        0.1,
        colorIndex === 0
          ? colors.green
          : colorIndex === 1 ? colors.red : colors.blue
      )};
  }
`;

export default Card;
