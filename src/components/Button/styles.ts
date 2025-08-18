import styled from "styled-components";
import { Link } from "react-router-dom";

import { cores } from "../../styles";
import type { Props } from ".";

export const ButtonContainer = styled.button<Props>`
  border-radius: 8px;
  color: ${cores.branca};
  background-color:${(props) => props.variant === 'primary' ? cores.verde : 'transparent'};
  border: ${(props) => props.variant === 'primary' ? 'none' : `2px solid ${cores.branca}`};
  font-size: 16px;
  font-weight: bold;
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
