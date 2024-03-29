import * as React from "react";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ArticleShop from "./pages/ArticleShop/ArticleShop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import { STRIPE_PUBLISHABLE_KEY } from "./configStripe.js";
import PaymentForm from "./pages/Payment/PaymentForm.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import FormShipping from "./pages/FormShipping/FormShipping.jsx";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:articleId" element={<ArticleShop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form-shipping" element={<FormShipping />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
