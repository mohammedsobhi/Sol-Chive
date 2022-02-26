import CardsContainer from "../../components/searchResults/CardsContainer";
import Container from "../../components/layout/Container";
import ProfileCard from "../../components/searchResults/ProfileCard";
import SearchHeader from "../../components/searchResults/SearchHeader";
import NoResult from "../../components/searchResults/NoResult";

const SearchResults = () => {
  const state = true;
  return (
    <div>
      <SearchHeader />

      {state ? (
        <Container>
          <ProfileCard />
          <CardsContainer />
        </Container>
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default SearchResults;
