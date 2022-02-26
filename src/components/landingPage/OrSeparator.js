import styled from "styled-components";

const SeparatorContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Line = styled.hr`
  width: 150px;
  height: 1px;
  border: 1px solid var(--text-color);
`;

const Or = styled.p`
  font-size: 20px;
`;

const OrSeparator = () => {
  return (
    <SeparatorContainer>
      <Line />
      <Or>or</Or>
      <Line />
    </SeparatorContainer>
  );
};

export default OrSeparator;
