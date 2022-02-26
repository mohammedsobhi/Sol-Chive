import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 60px;
  background-color: var(--main-gray-color);
`;

const GithubLink = styled.a`
  color: var(--text-color);
  width: 75px;
  display: flex;
  text-decoration: none;
  gap: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Developed by Sobhi & Islam</p>
      <GithubLink
        href="https://github.com/mohammedsobhi/sol-chive"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
        GitHub
      </GithubLink>
    </FooterContainer>
  );
};

export default Footer;
