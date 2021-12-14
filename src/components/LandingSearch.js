import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin-top: 15px;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const EmailInput = styled.input`
  width: 330px;
  border: none;
  padding: 9px 12px;
  border-radius: 8px;
  background-color: var(--main-gray-color);
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 10px;
`;

const LandingSearch = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <label htmlFor="email">Find someone with email</label>
        <EmailInput
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <Link to={"/search"}>
          <button type="submit" className="main-button">
            Find now
          </button>
        </Link>
      </SearchForm>
    </SearchContainer>
  );
};

export default LandingSearch;
