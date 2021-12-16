import CardsContainer from "../components/CardsContainer";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";

const SearchResults = () => {
  return (
    <div>
      <SearchHeader />
      <Container>
        <ProfileCard />
        <CardsContainer />
      </Container>
      <Footer />
    </div>
  );
};

export default SearchResults;
