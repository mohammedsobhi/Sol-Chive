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
      <LoginWithButton social="Facebook">
        <FacebookCircle />
      </LoginWithButton>
      <LoginWithButton social="Github">
        <Github />
      </LoginWithButton>
      <LoginWithButton social="Google">
        <Google />
      </LoginWithButton>
      <LoginWithButton social="Twitter">
        <Twitter />
      </LoginWithButton>
    </ButtonsList>
  );
};

export default ButtonsContainer;
