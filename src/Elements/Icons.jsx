import styled from "styled-components";

const white = "#DEDEDE";

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
export {IconsList, Icons};