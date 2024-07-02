import React from 'react';
import { ProfileImage, ProfileText } from "./Detail";

const DetailProfile = () => {
  return (
    <div>
      <ProfileImage src="./figure/icon.jpg" alt="Profile" />
      <ProfileText>
        <h4>YutoShima</h4>
        <h5>Kobe x Engineer's Lab 運営、Engineer</h5>
      </ProfileText>
      <p>神戸大学海洋政策科学部に在籍しています。現在は、GAOGAOゲート株式会社でインターンを務めています。インターンシップ以外にも、神戸市が主催する「Kobe x Engineer's Lab」というエンジニア育成事業に関わっており、主にインターン生の仲介業務を担当しています。これまでに50件を超えるインターン斡旋の実績があります。Webサイトの制作や運用、ブログ記事の執筆、イベントの企画運営、コミュニティの運営など、幅広い分野で活動しています。プライベートでは、Webアプリケーション開発やデータサイエンスの勉強を行っています。趣味はアウトドア活動と動画鑑賞で、リフレッシュしています。</p>
    </div>
  );
}

export default DetailProfile;
