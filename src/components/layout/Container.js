import styled from "styled-components";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(240px, 280px) minmax(10px, 1fr);
  grid-gap: 17px;
  align-items: start;
  justify-items: center;
  width: 80%;
  margin: 0 auto;
  /* margin-top: 40px; */
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 1140px) {
    width: 95%;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
