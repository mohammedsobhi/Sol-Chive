import LandingPage from "./pages/LandingPage";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
