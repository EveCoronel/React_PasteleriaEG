//@ts-check
import "./App.css";
import "./components/Navbar/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/NavPages/Home.jsx";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer.jsx";
import Contacto from "./components/NavPages/Contacto.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Category from "./components/NavPages/Category";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      {/* <NavBar />
      <ItemListContainer greeting={"Pia"} items={ItemList} />
      <ItemDetailContainer /> */}

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
          </Routes>
          <Footer></Footer>
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
