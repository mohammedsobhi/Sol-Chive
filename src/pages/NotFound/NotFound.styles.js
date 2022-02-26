import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  min-height: calc(100vh - 60px);
`;

export const Error = styled.main`
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
`;
export const ErrorMessage = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
export const ErrorAction = styled.button`
  margin: 30px 0;
`;

export const ErrorCode = styled.div``;

export const Number = styled.h2`
  color: var(--main-yellow-color);
  font-size: 120px;
  font-weight: bold;
  text-align: center;
`;

export const Message = styled.h3`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;
