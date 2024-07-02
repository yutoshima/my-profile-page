import React from 'react';
import styled from 'styled-components';

const Title = () => {
const TitleWrapper = styled.div`
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

return (
<TitleWrapper>
<h1>YUTO SHIMA</h1>
<h2>THIS IS SHIMA'S PROFILE PAGE</h2>
</TitleWrapper>
);
};

export { Title };