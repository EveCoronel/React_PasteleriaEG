import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import "./components/Navbar/NavBar.css";
import React, { useState, useEffect } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Pia"} items={ItemList} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
