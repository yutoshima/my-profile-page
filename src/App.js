import React from 'react';
import { Container, FirstComponents, FirstPage, Title, IconsList, Icons } from "./Elements";
import { BsPerson, BsVectorPen, BsAward, BsLightbulb, BsChatDots } from "react-icons/bs";

const App = () => {
  return (
    <Container>
      <FirstPage>
        <FirstComponents>
          <Title>
            <h1>YUTO SHIMA</h1>
            <h2>THIS IS SHIMA'S PROFILE PAGE</h2>
          </Title>
          <IconsList>
            <Icons><BsPerson /></Icons>
            <Icons><BsVectorPen /></Icons>
            <Icons><BsAward /></Icons>
            <Icons><BsLightbulb /></Icons>
            <Icons><BsChatDots /></Icons>
          </IconsList>
        </FirstComponents>
      </FirstPage>
    </Container>
  );
}

export default App;