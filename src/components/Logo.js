import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
`;

const Yellow = styled.span`
  display: inline;
  color: var(--main-yellow-color);
`;

const Logo = () => {
  return (
    <Title>
      <Yellow>Sol</Yellow>-chive
    </Title>
  );
};

export default Logo;
