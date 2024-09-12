import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home"
import { About } from "./pages/about/components/About"
import "./index.css"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;




