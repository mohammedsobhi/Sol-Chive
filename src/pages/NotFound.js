import styled from "styled-components";
import Footer from "../components/Footer";
import LogoHeader from "../components/LogoHeader";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  min-height: calc(100vh - 60px);
`;

const Error = styled.main`
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
`;
const ErrorMessage = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const ErrorAction = styled.button`
  margin: 30px 0;
`;

const ErrorCode = styled.div``;

const Number = styled.h2`
  color: var(--main-yellow-color);
  font-size: 120px;
  font-weight: bold;
  text-align: center;
`;

const Message = styled.h3`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;
const NotFound = () => {
  return (
    <>
      <PageContainer>
        <LogoHeader />
        <Error>
          <ErrorMessage>
            Something's
            <br />
            Missing.
          </ErrorMessage>
          <ErrorAction className="btn">Go Back</ErrorAction>
        </Error>
        <ErrorCode>
          <Number>404</Number>
          <Message>Page Not Found</Message>
        </ErrorCode>
      </PageContainer>
      <Footer />
    </>
  );
};

export default NotFound;
