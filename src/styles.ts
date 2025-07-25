import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  branca: "#EEE",
  preta: "#111",
  cinza: "#333",
  verde: "#10AC84",
};

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        text-decoration: none;
        text-decoration: none;
    }

    body{
        background-color: ${cores.preta};
        color: ${cores.branca} ;
        padding-top: 40px;
    }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
