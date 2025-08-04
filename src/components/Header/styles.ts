import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  list-style: none;
  text-align: center;
`;

export const LinkItem = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: 700;
`;

export const LinkCart = styled(Link)`
  display: flex;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: 700;

  img {
    margin-left: 16px;
  }
`;
