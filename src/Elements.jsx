import styled, { createGlobalStyle, css } from "styled-components";

const white = "#DEDEDE";
const baseBlue = "#516C9D";

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
  background-color: green;
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
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: none;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-size: 4.5em;
    margin: 12px;
    @media (min-width: 768px) {
      font-size: 6em;
    }
  }
  h2 {
    font-size: 1em;
    @media (min-width: 768px) {
      font-size: 2em;
    }
  }
`;

const IconsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: none;
  margin: none;
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Icons = styled.div`
  display: inline-block;
  margin: none;
  padding: 12px;
  width: 33%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: red;
  @media (min-width: 768px) {
    width: 20%;
  }
  svg {
    color: ${white};
    padding: none;
    margin: none;
    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
    }
    width: 36px;
    height: 36px;
  }
`;

export { GlobalStyle, Container, FirstPage, FirstComponents, Title, IconsList, IconsRow, Icons };