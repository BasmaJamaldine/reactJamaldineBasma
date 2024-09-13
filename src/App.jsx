import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home"
import { About } from "./pages/about/components/About"
import "./index.css"
import NavBar from "./layout/NavBar";
import Footer from "./layout/footer";
import { Shop } from "./pages/shop/components/Shop";
import DetShop from "./pages/detaille/components/DetShop";
import Blog from "./pages/blog/components/Blog"
import Contact from "./pages/contact/components/Contact";
import SignUp from "./pages/signUp/components/SignUp"
import Login from "./pages/login/components/Login"
import { MyProvider } from "./context";
function App() {
  return (
    <>
    <MyProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} /><Route/>
      <Route path="/about" element={<About />} /><Route/>
      <Route path="/shop" element={<Shop/>} /><Route/>
      <Route path="/shop/:id" element={<DetShop />} /><Route/>
      <Route path="/blog" element={<Blog/>} /><Route/>
      <Route path="/contact" element={<Contact/>} /><Route/>
      <Route path="/signUp" element={<SignUp/>} /><Route/>
      <Route path="/login" element={<Login/>} /><Route/>
    </Routes>
    <Footer/>
    </MyProvider>
   </>
  );
}

export default App;




