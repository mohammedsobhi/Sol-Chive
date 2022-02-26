import styled from "styled-components";
import LandingSearch from "../landingPage/LandingSearch";
import OrSeparator from "../landingPage/OrSeparator";

const NoResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  min-height: calc(100vh - 140px);
`;

const ErrorContainer = styled.div`
  background-color: var(--error-bg-color);
  padding: 10px 30px;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
`;

const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 20px;
  text-align: center;
`;

const NoResult = () => {
  return (
    <NoResultContainer>
      <ErrorContainer>
        <ErrorMessage>
          Sorry there is no such a user .. check that you wrote the correct
          email
        </ErrorMessage>
      </ErrorContainer>
      <OrSeparator />
      <LandingSearch />
    </NoResultContainer>
  );
};

export default NoResult;
