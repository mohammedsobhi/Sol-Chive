import styled from "styled-components";
import Logo from "../layout/Logo";

const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
`;

const LogoHeader = () => {
  return (
    <Header>
      <Logo />
    </Header>
  );
};

export default LogoHeader;
