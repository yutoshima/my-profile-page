import React from 'react';
import styled from 'styled-components';

const Works = [
    {
      img: "image.png",
      star: 4,
      contents: "Kobe x Engineer's Lab HP"
    },
    {
      img: "example.com",
      star: 3,
      contents: "スカウト型インターン"
    }
  ];

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 100%;
  margin: 12px;
  @media (min-width: 768px) {
        width: 33%;
    }
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
