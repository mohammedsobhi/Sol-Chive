import LandingPage from "./pages/LandingPage";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
