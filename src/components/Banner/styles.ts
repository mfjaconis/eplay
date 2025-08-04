import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  height: 650px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  font-weight: 700;
  padding-top: 340px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

export const Title = styled.h2`
  z-index: 5;
  position: relative;
  font-size: 36px;
  font-style: normal;
  line-height: normal;
  width: 449px;
`;

export const Text = styled.p`
  z-index: 5;
  position: relative;
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`;
