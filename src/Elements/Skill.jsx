import React from 'react';
import styled from 'styled-components';

const Skill = [
  {
    img: "image.png",
    star: 4,
    contents: "HTMLの構造化とCSSのスタイル設定により、モダンでユーザビリティの高いウェブサイトを作成できます。レスポンシブWebデザインも考えることができます。"
  },
  {
    img: "example.com",
    star: 3,
    contents: "HTMLの構造化とCSSのスタイル設定により、モダンでユーザビリティの高いウェブサイトを作成できます。レスポンシブWebデザインも考えることができます。"
  }
  // Add more skills as needed
];

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-basis: calc(50% - 20px);

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-right: 0;
    flex-direction: column; /* スマホサイズ以下で上下に配置 */
    align-items: flex-start; /* 左詰めに配置 */
  }
`;

const SkillImg = styled.img`
  float: left;
  width: 20%;
  height: auto; /* 画像の縦横比を保持 */
  margin: auto 12px;

  @media (max-width: 768px) {
    width: 50%;
    margin: 12px auto;
  }
`;

const SkillText = styled.div`
  display: flex;
  flex-direction: column; /* 子要素を上下に配置 */
`;

const SkillTitle = styled.h2`
  margin: 0;
`;

const SkillDescription = styled.p`
  margin: 0;
`;

const SkillCard = () => (
  <SkillsContainer>
    {Skill.map((item, key) => (
      <SkillDiv key={key}>
        <SkillImg src={item.img} />
        <SkillText>
          <SkillTitle>{'★'.repeat(item.star)}{'☆'.repeat(5 - item.star)}</SkillTitle>
          <SkillDescription>{item.contents}</SkillDescription>
        </SkillText>
      </SkillDiv>
    ))}
  </SkillsContainer>
);

export default SkillCard;