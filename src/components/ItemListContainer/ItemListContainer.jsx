import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const coleccion = "items";
  const db = getFirestore();

  const divStyle = {
    height: "100vh",
  };

  const itemsCollection = collection(db, coleccion);

  useEffect(() => {
    getDocs(itemsCollection).then((res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div style={divStyle} className="div">
          <article className="articulo">
            <Loader></Loader>
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="div">
        <article className="articulo">
          <ItemList productos={productos} />
        </article>
      </div>
    </>
  );
}
