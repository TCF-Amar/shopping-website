import React from "react";
import Header from "./component/Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/theme/themeSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import Cart from './pages/Cart';
import About from './pages/About';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      data-theme={theme}
      className="h-screen w-full  overflow-hidden overflow-y-auto  relative bg-gradient-to-br from-blue-300 to-neutral/20"
    >
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
     
    </div>
  );
}

export default App;
