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

// Container component
const Container = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  @media (min-width: 768px) {
    width: 66%;
  }
`;

// First page component
const FirstPage = styled.div`
  height: 100vh;
  width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// First page content component
const FirstComponents = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: none;
`;

// Title component
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
    font-size: 1.5em;
    @media (min-width: 768px) {
      font-size: 2em;
    }
  }
`;

// Icons list component
const IconsList = styled.div`
  width: 66%;
  @media (min-width: 768px) {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
`;

// Individual icon component
const Icons = styled.div`
  display: inline-block;
  margin: 0px;
  padding: 0px, 12px;
  width: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${white};
  @media (min-width: 520px) {
    width: 96px;
  }
  svg {
    color: ${white};
    padding: 0px;
    margin: 12px;
    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
    }
    width: 36px;
    height: 36px;
  }
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

const DetailProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 20%;
`;

const ProfileText = styled.div`
  width: auto;
  margin: 24px;
  h4 {
    font-size: 1.5em;
    margin: 0px;
    @media (min-width: 520px) {
        font-size: 2em;  }
  }
  h5 {
    font-size: 0.5em;
    @media (min-width: 520px) {
        font-size: 1em;  }
  }
`;

export {
  GlobalStyle,
  Container,
  FirstPage,
  FirstComponents,
  Title,
  IconsList,
  Icons,
  SecondPage,
  SecondComponents,
  SecondComponent,
  DetailTitle,
  DetailContent,
  DetailProfile,
  ProfileImage,
  ProfileText,
};