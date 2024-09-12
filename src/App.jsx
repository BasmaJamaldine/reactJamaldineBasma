import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home"
import { About } from "./pages/about/components/About"
import "./index.css"
import NavBar from "./layout/NavBar";
function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home />} /><Route/>
      <Route path="/about" element={<About />} /><Route/>
      <Route path="path" element={<path />} />
    </Routes>
    </>
  );
}

export default App;




