import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  width: 107px;
  border-radius: 8px;
  color: ${cores.branca};
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px 16px;
`;

export const ButtonLink = styled(Link)`
  width: 107px;
  border-radius: 8px;
  color: ${cores.branca};
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px 16px;
  text-decoration: none;
`;
