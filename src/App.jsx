import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home"
import { About } from "./pages/about/components/About"
import "./index.css"
import NavBar from "./layout/NavBar";
import Footer from "./layout/footer";
import { Shop } from "./pages/shop/components/Shop";
import DetShop from "./pages/detaille/components/DetShop";
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} /><Route/>
      <Route path="/about" element={<About />} /><Route/>
      <Route path="/shop" element={<Shop/>} /><Route/>
      <Route path="/shop/:id" element={<DetShop />} /><Route/>
    </Routes>
    <Footer/>
    
   </>
  );
}

export default App;




