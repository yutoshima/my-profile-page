// Globals
import styled, { createGlobalStyle } from "styled-components";

const white = "#DEDEDE";
const baseBlue = "#516C9D";

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${baseBlue};
    color: ${white};
    font-family: sans-serif;
  }
`;
const Container = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  @media (min-width: 768px) {
    width: 66%;
  }
`;
const FirstPage = styled.div`
  height: 100vh;
  width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FirstComponents = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: none;
`;
const SecondPage = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecondComponents = styled.div`
  height: auto;
  margin: 0px 36px;
  width: 66%;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
const SecondComponent = styled.div`
  height: auto;
  width: 100%;
`;
const DetailTitle = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 12px;
  svg {
    margin: 12px;
    font-size: 5ex;
  }
  h3 {
    font-size: 48px;
  }
`;
const DetailContent = styled.div`
  width: 100%;
  padding: 24px;
`;
export {
  GlobalStyle,
  Container,
  FirstPage,
  FirstComponents,
  SecondPage,
  SecondComponents,
  SecondComponent,
  DetailTitle,
  DetailContent,
};
