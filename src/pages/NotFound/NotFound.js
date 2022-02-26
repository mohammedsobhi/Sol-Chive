import LogoHeader from "../../components/landingPage/LogoHeader";
import {
  PageContainer,
  Error,
  ErrorMessage,
  ErrorAction,
  ErrorCode,
  Number,
  Message,
} from "./NotFound.styles";

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
    </>
  );
};

export default NotFound;
