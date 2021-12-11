import styled from "styled-components";
import ButtonsContainer from "../components/ButtonsContainer";
import Footer from "../components/Footer";
import LandingSearch from "../components/LandingSearch";
import Logo from "../components/Logo";
import OrSeparator from "../components/OrSeparator";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
`;

const MainSection = styled.section`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
const SubHeading = styled.h3`
  font-size: 20px;
`;

const LandingPage = () => {
  return (
    <>
      <MainContainer>
        <LogoHeader>
          <Logo />
        </LogoHeader>
        <MainSection>
          <Heading>Welcome</Heading>
          <SubHeading>Login or join us via</SubHeading>
          <ButtonsContainer />
          <OrSeparator />
          <LandingSearch />
        </MainSection>
      </MainContainer>
      <Footer />
    </>
  );
};

export default LandingPage;
