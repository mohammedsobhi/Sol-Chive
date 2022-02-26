import ButtonsContainer from "../../components/landingPage/ButtonsContainer";
import LandingSearch from "../../components/landingPage/LandingSearch";
import OrSeparator from "../../components/landingPage/OrSeparator";
import LogoHeader from "../../components/landingPage/LogoHeader";
import {
  MainContainer,
  MainSection,
  Heading,
  SubHeading,
} from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <>
      <MainContainer>
        <LogoHeader />
        <MainSection>
          <Heading>Welcome</Heading>
          <SubHeading>Login or join us via</SubHeading>
          <ButtonsContainer />
          <OrSeparator />
          <LandingSearch />
        </MainSection>
      </MainContainer>
    </>
  );
};

export default LandingPage;
