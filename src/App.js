
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<Items />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
