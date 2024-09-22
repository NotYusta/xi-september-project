import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Portofolio from "./pages/portofolio";
import About from "./pages/about";
import { URLPrefix } from "./Constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={`${URLPrefix}`} element={<Home />} />
        <Route path={`${URLPrefix}/portofolio`}element={<Portofolio />} />
        <Route path={`${URLPrefix}/about`} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
