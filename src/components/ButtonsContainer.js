import styled from "styled-components";
import LoginWithButton from "./LoginWithButton";
import {
  FacebookCircle,
  Github,
  Google,
  Twitter,
} from "@styled-icons/boxicons-logos";

const ButtonsList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const ButtonsContainer = () => {
  return (
    <ButtonsList>
      <LoginWithButton>
        <FacebookCircle />
      </LoginWithButton>
      <LoginWithButton>
        <Github />
      </LoginWithButton>
      <LoginWithButton>
        <Google />
      </LoginWithButton>
      <LoginWithButton>
        <Twitter />
      </LoginWithButton>
    </ButtonsList>
  );
};

export default ButtonsContainer;
