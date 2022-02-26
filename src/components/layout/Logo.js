import styled from "styled-components";

const Title = styled.h1`
  font-size: ${({ size }) => (size ? size : "30px")};
  font-weight: ${({ weight }) => (weight ? weight : "regular")};
`;

const Yellow = styled.span`
  display: inline;
  color: var(--main-yellow-color);
`;

const Logo = ({ size, weight }) => {
  return (
    <Title size={size} weight={weight}>
      <Yellow>Sol</Yellow>-chive
    </Title>
  );
};

export default Logo;
