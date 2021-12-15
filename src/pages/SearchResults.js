import CardsContainer from "../components/CardsContainer";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import SearchHeader from "../components/SearchHeader";

const SearchResults = () => {
  return (
    <div>
      <SearchHeader />
      <Container>
        <ProfileCard />
        <CardsContainer />
      </Container>
    </div>
  );
};

export default SearchResults;
