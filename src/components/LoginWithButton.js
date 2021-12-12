import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: var(--main-gray-color);
  color: var(--text-color);
  width: 71px;
  height: 71px;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;

  &:hover {
    background-color: var(--darker-gray-color);
  }
`;

const LoginWithButton = ({ children, social }) => {
  return (
    <li>
      <Button ariaLabel="Login with social media">{children}</Button>
      <span className="visually-hidden">Login with {social}</span>
    </li>
  );
};

export default LoginWithButton;
