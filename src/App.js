import "./App.css";
import NavBar from "./componenets/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductList from "./componenets/ProductList";
import Login from "./componenets/Login";
import Cart from "./componenets/Cart";
import Footer from "./componenets/Footer";
// import Payment from "./componenets/PaymentPage";

import { useState } from "react";
import SignUp from "./componenets/SignUp";
import ProductDetails from "./componenets/ProductDetails";
import PaymentPage from "./componenets/PaymentPage";

import Success from "./componenets/Success";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      {!location.pathname.includes("/login") &&
        !location.pathname.includes("/cart") &&
        !location.pathname.includes("/success") &&
        !location.pathname.includes("/signup") &&
        !location.pathname.includes("/payment") &&
        !location.pathname.includes("/products/:id") && <Footer />}
    </div>
  );
}

export default App;
