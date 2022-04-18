import About from "../../pages/About/About";
import Portfolio from "../../pages/Portfolio/Portfolio";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default Router;
