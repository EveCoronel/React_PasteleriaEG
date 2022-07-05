//@ts-check
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import NavBar from "./components/Navbar/NavBar";
import "./components/Navbar/NavBar.css";
import Category from "./components/NavPages/Category";
import Contacto from "./components/NavPages/Contacto.jsx";
import Home from "./components/NavPages/Home.jsx";
import CartContext from "./context/CartContext";
import { initializeApp } from "firebase/app";
import { Grid } from "@mui/material";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD5Uwvdd-1iWKp1G1bwWUxNsqYb0kwLxwo",
    authDomain: "pasteleria-eg-react.firebaseapp.com",
    projectId: "pasteleria-eg-react",
    storageBucket: "pasteleria-eg-react.appspot.com",
    messagingSenderId: "777834141171",
    appId: "1:777834141171:web:b56e138d508ebf67082e86",
  };

  initializeApp(firebaseConfig);

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/items/:itemsid"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/category/:categoryid" element={<Category />} />
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<h1>Not found 😐</h1>}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>           
          </Routes>
          <Footer></Footer>
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
