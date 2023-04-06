import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/marvel_test" element={<Home />} />
        <Route path="/1" element={<Detail />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
