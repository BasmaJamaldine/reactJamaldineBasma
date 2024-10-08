import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home"
import { About } from "./pages/about/components/About"
import "./index.css"
import NavBar from "./layout/NavBar";
import Footer from "./layout/footer";
import DetShop from "./pages/detaille/components/DetShop";
import Blog from "./pages/blog/components/Blog"
import Contact from "./pages/contact/components/Contact";
import SignUp from "./pages/login/components/signup"
import SignIn from "./pages/signUp/components/SignIn"
import { MyProvider } from "./context";
import Shop from "./pages/shop/components/Shop";
import { useState } from "react";
import { Cart } from "./pages/cart/components/cart";
function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <>
    <MyProvider>
    <NavBar cartItems={cart.length} cart={cart}/>
    <Routes>
      <Route path="/" element={<Home />} /><Route/>
      <Route path="/about" element={<About />} /><Route/>
      <Route path="/shop" element={<Shop setCart={setCart} />} /><Route/>
      <Route path="/shop/:id" element={<DetShop />} /><Route/>
      <Route path="/blog" element={<Blog/>} /><Route/>
      <Route path="/contact" element={<Contact/>} /><Route/>
      <Route path="/signin" element={<SignIn/>} /><Route/>
      <Route path="/signup" element={<SignUp/>} /><Route/>
      <Route path="/cart/:id" element={<Cart cart={cart}  />} /><Route/>
    </Routes>
    <Footer/>
    </MyProvider>
   </>
  );
}

export default App;




