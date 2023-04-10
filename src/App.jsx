import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Result from "./pages/Result";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/marvel_test" element={<Home />} />
          <Route path="/1" element={<Detail />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
