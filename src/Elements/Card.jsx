import React from 'react';
import styled from 'styled-components';

const Works = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxMXy22VAGI9-OxqcJRXR0b8U7BlyDZyUAg&s",
      contents: "Kobe x Engineer's Lab HP"
    },
    {
      img: "https://assets.st-note.com/img/1687228859283-3zfc7Mmh92.png?width=800",
      contents: "スカウト型インターン"
    },
    {
      img: "https://media.discordapp.net/attachments/1221473005646119054/1227646907657093281/2024-04-11_0.50.28.png?ex=6684ca87&is=66837907&hm=642d5efd4bd554d5fd64c111487926352b4b8cb1e84bd9a10de571e46c739e4a&=&format=webp&quality=lossless&width=336&height=352",
      contents: "キャンパスメイト"
    },
    {
      img: "data:image/jpeg;base64,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",
      contents: "Kobe x Engineer's Lab イベント"
    },
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX///+PT1FyAAB0AARoAAD49fWSVVd2CBB4FRptAAB2CxJ5Fxx1AAxsAAChcHLo3t/Ls7P07+/Hra2YX2G0kJG+n6B8ISWAKy9iAADTv8Df0dGwiYrCpqfu5+epfX6cZ2mIP0IjJ/3bAAAAlklEQVR4AdWRRQLDIAAEtxvD4u75/yfrHru2gzM4+EMOtD6wHbxwPfGB/JBKfzCXRvqS6hwXpAxCOJGIk1TNJDNccICc31IUdwVQfEvmZ1VWNRBRz2QDtGQHBGYmZX+5rX3OB85lCGR2hDOjmS3b4UoMOBRfUjDEmbYApvk9hUyzQVMxtZaez6MRWgulv+X8V/b/89c4ATGhCUelD1R5AAAAAElFTkSuQmCC",
      contents: "αプロジェクト参加"
    },
    {
      img: "https://media.connpass.com/thumbs/88/79/8879f198bbf45ab0ce0c6bf6cba5122c.png",
      contents: "CodePanda 運営"
    },
  ];

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  @media (min-width: 1280px) {
    width: 30%;
  }
  @media (min-width: 768px) {
    width: 45%;
  }
  width: 100%;
  margin: 12px;
  height: auto;
  border-radius: 8px;
  border: 3px solid #DEDEDE;
`;

const CardImgFrame = styled.div`
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardTextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const CardOverviewText = styled.div`
  font-size: 24px;
  line-height: 150%;
  font-weight: bold;
`;

const CardComponent = () => (
    <>
    <SkillsContainer>
    {Works.map((item,key)=>(
        <Card key={key}>
        <CardImgFrame imgSrc={item.img} />
        <CardTextBox>
          <CardOverviewText>{item.contents}</CardOverviewText>
        </CardTextBox>
      </Card>
    ))}
    </SkillsContainer>
    </>
);

export default CardComponent;
