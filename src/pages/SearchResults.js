import CardsContainer from "../components/CardsContainer";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";
import NoResult from "../components/NoResult";

const SearchResults = () => {
  const state = false;
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

      <Footer />
    </div>
  );
};

export default SearchResults;
