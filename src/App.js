import React, { useRef, useState, useEffect } from 'react';
import { Container, FirstPage, FirstComponents, Title, IconsList, Icons, SecondPage, SecondComponents, SecondComponent, DetailTitle, DetailContent, DetailProfile, ProfileImage, ProfileText } from "./Elements";
import { BsPerson, BsVectorPen, BsAward, BsLightbulb, BsChatDots } from "react-icons/bs";
import Career from "./Elements/Career";
import CardComponent from "./Elements/Card";
import SkillCard from "./Skill";
import ContactForm from "./Elements/Form"
import AnchorLink from "react-anchor-link-smooth-scroll";

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
           <AnchorLink href="#About"><Icons className="icon"><BsPerson /></Icons></AnchorLink>
           <AnchorLink href="#Career"><Icons className="icon"><BsVectorPen /></Icons></AnchorLink>
           <AnchorLink href="#Works"><Icons className="icon"><BsAward /></Icons></AnchorLink>
           <AnchorLink href="#Skill"><Icons className="icon"><BsLightbulb /></Icons></AnchorLink>
           <AnchorLink href="#Contact"><Icons className="icon"><BsChatDots /></Icons></AnchorLink>
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
             <DetailProfile>
               <ProfileImage src="icon.jpg" alt="Profile" />
               <ProfileText>
                 <h4>YutoShima</h4>
                 <h5>Kobe x Engineer's Lab 運営、Engineer</h5>
               </ProfileText>
             </DetailProfile>
             <p>神戸大学海洋政策科学部に在籍しています。現在は、GAOGAOゲート株式会社でインターンを務めています。インターンシップ以外にも、神戸市が主催する「Kobe x Engineer's Lab」というエンジニア育成事業に関わっており、主にインターン生の仲介業務を担当しています。これまでに50件を超えるインターン斡旋の実績があります。Webサイトの制作や運用、ブログ記事の執筆、イベントの企画運営、コミュニティの運営など、幅広い分野で活動しています。プライベートでは、Webアプリケーション開発やデータサイエンスの勉強を行っています。趣味はアウトドア活動と動画鑑賞で、リフレッシュしています。</p>
           </DetailContent>
         </SecondComponent>

         <SecondComponent>
           <DetailTitle>
             <BsVectorPen />
             <h3 id="Career">Career</h3>
           </DetailTitle>
           <DetailContent>
             <table>
               {Career.map((item, index) => (
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
            <ContactForm />
           </DetailContent>
         </SecondComponent>
       </SecondComponents>
     </SecondPage>
   </Container>
 );
}

export default App;