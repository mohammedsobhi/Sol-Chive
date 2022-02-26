import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchResults from "./pages/SearchResults/SearchResults";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
