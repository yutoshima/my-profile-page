import React from 'react';
import { Container, FirstPage, FirstComponents, SecondPage, SecondComponents, SecondComponent, DetailTitle, DetailContent } from './Elements/other';
import { Title } from './Elements/Title';
import { IconsList, Icons } from './Elements/Icons';
import { BsPerson, BsVectorPen, BsLightbulb, BsChatDots, BsAward } from "react-icons/bs";
import Profile from './Elements/Profile';
import CardComponent from './Elements/Card';
import ContactForm from './Elements/Form';
import SkillCard from './Elements/Skill';
import { careerData } from './Data/careerData';

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
            <a href="#About"><Icons className="icon"><BsPerson /></Icons></a>
            <a href="#Career"><Icons className="icon"><BsVectorPen /></Icons></a>
            <a href="#Works"><Icons className="icon"><BsAward /></Icons></a>
            <a href="#Skill"><Icons className="icon"><BsLightbulb /></Icons></a>
            <a href="#Contact"><Icons className="icon"><BsChatDots /></Icons></a>
          </IconsList>
        </FirstComponents>
      </FirstPage>

      <SecondPage>
        <SecondComponents>
          <SecondComponent>
            <DetailTitle>
              <BsPerson />
              <h3 id="About">About</h3>
            </DetailTitle>
            <DetailContent>
              <Profile />
            </DetailContent>
          </SecondComponent>

          <SecondComponent>
            <DetailTitle>
              <BsVectorPen />
              <h3 id="Career">Career</h3>
            </DetailTitle>
            <DetailContent>
              <table>
                {careerData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.year}年</td>
                    <td>{item.date}月</td>
                    <td>{item.content}</td>
                  </tr>
                ))}
              </table>
            </DetailContent>
          </SecondComponent>

          <SecondComponent>
            <DetailTitle>
              <BsAward />
              <h3 id="Works">Works</h3>
            </DetailTitle>
            <DetailContent>
              <CardComponent/>
            </DetailContent>
          </SecondComponent>

          <SecondComponent>
            <DetailTitle>
              <BsLightbulb />
              <h3 id="Skill">Skill</h3>
            </DetailTitle>
            <DetailContent>
              <SkillCard />
            </DetailContent>
          </SecondComponent>

          <SecondComponent>
          <DetailTitle>
              <BsChatDots />
              <h3 id="Contact">Contact</h3>
            </DetailTitle>
            <DetailContent>
              <h2>お問い合わせ先</h2>
              <ul>
                <li>メールアドレス：<a href="mailto:yutoshima1234@gmail.com" target="_blank" rel="noopener noreferrer">yutoshima1234@gmail.com</a></li>
                <li>Twitter：<a href="https://twitter.com/Yuto00579583" target="_blank" rel="noopener noreferrer">@Yuto00579583</a></li>
                <li>FaceBook：<a href="https://www.facebook.com/profile.php?id=100090928243991&locale=ja_JP" target="_blank" rel="noopener noreferrer">島悠人 </a></li>
                <li>GitHub：<a href="https://github.com/yutoshima" target="_blank" rel="noopener noreferrer">@yuto_shima</a></li>
              </ul>
            </DetailContent>
          </SecondComponent>
        </SecondComponents>
      </SecondPage>
    </Container>
  );
 }

 export default App;
