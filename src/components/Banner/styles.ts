import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const Image = styled.div`
  width: 100%;
  height: 650px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  font-weight: 700;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 5;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-style: normal;
  line-height: normal;
  width: 449px;
`;

export const Text = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`;
