
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import Home from "./pages/Home";
import Items from "./pages/Items";
import Header from "./components/Header";
import Wearing from "./pages/Wearing";

function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<Items />} />
          <Route exact path="/wearing" element={<Wearing />} />
        </Routes>
         {/* ToastContainer is added here */}
      <ToastContainer />
      </Router>
    </>
  );
}

export default App;
