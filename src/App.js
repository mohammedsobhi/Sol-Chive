import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import LandingPage from "./pages/LandingPage";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

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
