import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const coleccion = "items";
  const db = getFirestore();

  const itemsCollection = collection(db, coleccion);

  useEffect(() => {

    getDocs(itemsCollection).then((res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

   
  }, []);

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
