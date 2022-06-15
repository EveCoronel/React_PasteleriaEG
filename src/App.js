import "./App.css";
import "./components/Navbar/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/NavPages/Home.jsx";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer.jsx";
import Contacto from "./components/NavPages/Contacto.jsx";


function App() {
  return (
    <>
      {/* <NavBar />
      <ItemListContainer greeting={"Pia"} items={ItemList} />
      <ItemDetailContainer /> */}

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="" element={<Contacto></Contacto>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
