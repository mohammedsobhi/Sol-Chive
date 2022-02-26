import CardsContainer from "../components/CardsContainer";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import SearchHeader from "../components/SearchHeader";
import NoResult from "../components/NoResult";

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
