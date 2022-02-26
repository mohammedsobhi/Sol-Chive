import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../layout/Logo";
import { Search } from "@styled-icons/boxicons-regular/Search";

const appendAnimate = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Header = styled.header`
  background-color: var(--main-gray-color);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const SearchForm = styled.form`
  @media (max-width: 480px) {
    display: none;
  }
`;

const EmailInput = styled.input`
  width: 250px;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: var(--darker-gray-color);
  font-size: 16px;
  color: var(--text-color);
  margin: 0 10px;
  @media (max-width: 600px) {
    width: 200px;
  }
  @media (max-width: 550px) {
    width: 150px;
    margin: 0 5px;
  }
`;

const SearchLabel = styled.label`
  @media (max-width: 650px) {
    display: none;
  }
`;

const SearchButton = styled.button`
  @media (max-width: 480px) {
    display: none;
  }
`;

const ToggleSearchButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

const ToggledSearchForm = styled.form`
  background-color: var(--main-gray-color);
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  animation: ${appendAnimate} 0.3s;
  @media (min-width: 480px) {
    display: none;
  }
`;

const ToggledEmailInput = styled(EmailInput)`
  min-width: 170px;
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 550px) {
    width: 300px;
    margin: 0 15px 0 0;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

const ToggledSearchButton = styled(SearchButton)`
  display: block;
  @media (min-width: 480px) {
    display: none;
  }
`;

const SearchHeader = () => {
  const [searchBox, setSearchBox] = useState(false);

  function handelToggle() {
    searchBox ? setSearchBox(false) : setSearchBox(true);
  }

  return (
    <>
      <Header>
        <Logo size={"24px"} weight={"bold"} />
        <SearchForm>
          <SearchLabel htmlFor="email">Find:</SearchLabel>
          <EmailInput
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
          <SearchButton type="submit" className="btn">
            Search
          </SearchButton>
        </SearchForm>
        <ToggleSearchButton className="btn" onClick={handelToggle}>
          <Search style={{ width: "15px" }} />
        </ToggleSearchButton>
        <Link to={"/"}>
          <button className="btn">Join or login</button>
        </Link>
      </Header>
      {searchBox && (
        <ToggledSearchForm>
          <ToggledEmailInput
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
          <ToggledSearchButton type="submit" className="btn">
            Search
          </ToggledSearchButton>
        </ToggledSearchForm>
      )}
    </>
  );
};

export default SearchHeader;
