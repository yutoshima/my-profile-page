import React from "react";
import styled from "styled-components";

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
      font-size: 2em;
    }
  }

  h5 {
    font-size: 0.5em;
    @media (min-width: 520px) {
      font-size: 1em;
    }
  }
`;

const Profile = () => {
  return (
    <DetailProfile>
      <ProfileImage src="/img/icon.png" alt="Profile" />
      <ProfileText>
        <h4>YutoShima</h4>
        <h5>元Kobe x Engineer's Lab 運営、Engineer</h5>
      </ProfileText>
    </DetailProfile>
  );
};

export default Profile;
