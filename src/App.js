import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import "./components/Navbar/NavBar.css";

function App() {
  return (
    <>
      <NavBar className="navBar" />
      <ItemListContainer greeting={"Pia"} items={ItemList} />
    </>
  );
}

export default App;
