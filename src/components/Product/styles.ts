import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  position: relative;
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
